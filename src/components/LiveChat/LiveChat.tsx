import React from "react";

const LiveChat = () => {
    React.useEffect(() => {
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/64fc21d8a91e863a5c1285cf/1h9se8dnv';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0?.parentNode?.insertBefore(s1,s0);
    }, [])
    return null;
}

export default LiveChat;