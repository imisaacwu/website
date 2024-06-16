export const Resume = () => {
    return (
        <div className="container">
            {/android|iphone|kindle|ipad/i.test(navigator.userAgent) ?
                <p>Sorry! For whatever reason, the embed tag doesn't work on mobile.
                    You can <a href={require('./docs/pdf/Isaac-Wu-Resume.pdf')} download={"Isaac-Wu-Resume"}>click here</a> to
                    download the PDF file instead.</p> :
                <embed id="resume" src={require('./docs/pdf/Isaac-Wu-Resume.pdf')}/>}
        </div>
    );
}