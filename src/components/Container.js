import "./Container.css";
const Container = ({ photos }) => {
  const open = (url) => window.open(url);
  return (
    <div className="container">
      <div className="center">
        {photos.map((photo) => (
          <article key={photo.id} onClick={() => open(photo.links.html)}>
            <img src={photo.urls.regular} />
            <p>{[photo.description, photo.alt_description].join("-")}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Container;
