function Background() {
  return (
    <div className="page-background">
      {/* Video background for mobile */}
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/gondola.mp4" type="video/mp4" />
      </video>
      
      {/* Image background for desktop */}
      <div className="background-image" />
    </div>
  );
}

export default Background;
