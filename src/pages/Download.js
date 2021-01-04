import { Link, LinkOverlay } from "@chakra-ui/react";
import React from "react";
import axios from "axios";
// import fileDownload from "js-file-download";

class DownloadLink extends React.Component {
  handleDownload = (url, filename) => {
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        const blob = new Blob([res.data], { type: 'application/pdf' })
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = filename
        link.click()
        URL.revokeObjectURL(link.href)
        //fileDownload(res.data, filename);
      });
  };
  render() {
    return (
      <>
        <a href={this.props.src} download>
          {this.props.children}
        </a>
        <Link
          to="/files/vue-js-interview-questions.pdf"
          //   onClick={(event) => {
          //     event.preventDefault();
          //     window.open('https://www.onlineinterviewquestions.com/pdfs/vue-js-interview-questions.pdf');
          //   }}
          download
        >
          Click to download
        </Link>
        <br />
        <button
          onClick={() => {
            this.handleDownload(
              "https://www.onlineinterviewquestions.com/pdfs/vue-js-interview-questions.pdf",
              "vue-js-interview-questions.pdf"
            );
          }}
        >
          Download Image
        </button>
      </>
    );
  }
}

export default class MyComponent extends React.Component {
  render() {
    return (
      //   <DownloadLink src="/files/vue-js-interview-questions.pdf">
      <DownloadLink src="https://www.onlineinterviewquestions.com/pdfs/vue-js-interview-questions.pdf">
        Click Here
      </DownloadLink>
    );
  }
}
