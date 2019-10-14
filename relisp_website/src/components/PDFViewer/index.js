import React, { Component } from 'react'
import Proptypes from 'prop-types'
import { pdfjs, Document, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const buttonSyle = {
  borderRadius: "3px",
  padding: "0.2em 1.5em",
  backgroundColor: "#5DA7B4",
  boxShadow: "0 4px 3px black",
  marginRight: "2em",
  color: "white",
  fontWeight: "700"
}

export default class PDFViewer extends Component {
  static propTypes = {
    fileUrl: Proptypes.string.isRequired
  }

  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = (document) => {
    const { numPages } = document;
    this.setState({
      numPages,
      pageNumber: 1,
    });
  };

  changePage = offset => this.setState(prevState => ({
    pageNumber: prevState.pageNumber + offset,
  }));

  previousPage = () => this.changePage(-1);

  nextPage = () => this.changePage(1);

  setWidth = () => {
    const windowWidth = window.innerWidth
    const units = windowWidth / 100
    if (windowWidth <= 400) return units * 80
    return units * 30
  }

  render() {
    const { numPages, pageNumber } = this.state;

    return (
      <React.Fragment>
        <Document
          file={this.props.fileUrl}
          onLoadSuccess={this.onDocumentLoadSuccess}
          loading={<p style={{ color: "white", fontWeight: 600 }}>Cargando Programa...</p>}
        >
          <Page className="centered" pageNumber={pageNumber} width={ this.setWidth() } />
        </Document>
        <div>
          <p style={{ color: "white", fontWeight: "700" }}>
            Página {pageNumber || (numPages ? 1 : '--')} de {numPages || '--'}
          </p>
          <button
            style={buttonSyle}
            type="button"
            disabled={pageNumber <= 1}
            onClick={this.previousPage}
          >
            Anterior
          </button>
          <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={this.nextPage}
            style={buttonSyle}
          >
            Siguiente
          </button>
          <br />
          <br />
          <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={ () => window.location.assign("https://firebasestorage.googleapis.com/v0/b/elis-ae942.appspot.com/o/programa-elis.pdf?alt=media&token=dc031599-e553-476c-b9e9-5f7ff50acbc7") }
            style={{ ...buttonSyle, backgroundColor: "#E0D593", color: "#722660", padding: "0.4em 2em" }}
          >
            DESCARGAR PROGRAMA
          </button>
        </div>
      </React.Fragment>
    );
  }
}