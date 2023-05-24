import React, { useEffect } from "react";

function YouTubeVideo() {
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  let player;

  useEffect(() => {
    window.onYouTubeIframeAPIReady = () => {
      player = new window.YT.Player("youtube-player", {
        videoId: "7I_CAxJ0RiA",
        playerVars: {
          autoplay: 0,
          playsinline: 1,
          controls: 1,
          showinfo: 0,
          rel: 0,
          fs: 1,
          cc_load_policy: 0,
          iv_load_policy: 3,
        },
      });
    };
  }, []);

  return (
    <div>
      <div
        id="youtube-player"
        className="w-60 h-96 max-w-full border border-gray-200 rounded-lg dark:border-gray-700"
      ></div>
    </div>
  );
}

export default YouTubeVideo;
