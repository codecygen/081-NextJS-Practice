// Next-document-js-file

// Head document imported here is different than other Head component
// we used in other sections of the project
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            // Here language is set to english
            <Html lang='en'>
                <Head />
                <body>
                    {/* For example you may wanna create overlay div which can 
                    be used to port some of the components. */}
                    <div id="overlays" />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;