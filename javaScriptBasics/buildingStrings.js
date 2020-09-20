const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
                ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
                dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
                ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
                diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \   
                hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

console.log(paragraph);

// i got a syntax error that said Invalid or unexpected token.
// the reason for this error is because i have blank spaces after my backslash
// essentially i was trying to escape the newline character and ultimately did not.
// other problems - because the white spaces at the end of the line have been escaped,
// extra spaces in the middle of the line would now be interpreted as part of the string.