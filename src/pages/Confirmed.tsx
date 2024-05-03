import React from "react";

export function Confirmed() {
  return (
    <div style={styles.container}>
      <div style={styles.containerTitleImage}>
        <img
          style={styles.titleImage}
          src="/title.png"
          className="title-image"
        />
      </div>

      <div>
        <h1 style={styles.title} className="text-title">
          Parabéns seu agendamendo
          <br />
          está confirmado!
        </h1>
      </div>

      <div style={styles.containerlogoImage}>
        <img
          style={styles.logoImage}
          src="/logo-ok.png"
          className="logo-image"
        />
      </div>
      <style>{mediaQueries}</style>
    </div>
  );
}

const styles: {
  container: React.CSSProperties;
  containerTitleImage: React.CSSProperties;
  titleImage: React.CSSProperties;
  containerlogoImage: React.CSSProperties;
  logoImage: React.CSSProperties;
  title: React.CSSProperties;
} = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#47141e",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    padding: "0 5px 0px 5px",
    color: "white",
    textAlign: "center",
    position: "relative",
  },
  containerTitleImage: {
    display: "flex",
    marginTop: "-200px",
    justifyContent: "center",
    alignItems: "center",
  },
  titleImage: {
    maxWidth: "47%",
    verticalAlign: "top",
    marginLeft: "auto",
    marginRight: "auto",
  },
  containerlogoImage: {
    display: "flex",
    marginTop: "-20px",
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    maxWidth: "35%",
  },
  title: {
    fontSize: "46px",
    marginTop: "-56px",
    justifyContent: "center",
    alignItems: "center",
  },
};

const mediaQueries = `
@media screen and (max-width: 600px) {
  .title-image {
    max-width: 120% !important;
    max-height: 25%;
    margin-top: -60px;
    margin-bottom: 80px;
    
    
  }
  .text-title {
    font-size: 1.6rem !important;
    margin-bottom: 10px; 
  }
  .logo-image {
    max-width: 100% !important;
    max-height: 25%;
    margin-top: 20px;
  }
}
`;
