const FavoriteMusic = () => {
  return (
    <>
      shaxzoda loh
      <iframe
        title="test"
        frameborder="0"
        style={{ border: "none", width: "100%", height: "100vh" }}
        width="100%"
        height="450"
        src="https://music.yandex.com/iframe/#playlist/muminovasil/3"
      >
        Слушайте{" "}
        <a href="https://music.yandex.com/users/muminovasil/playlists/3">
          Мне нравится
        </a>{" "}
        — <a href="https://music.yandex.com/users/muminovasil">muminovasil</a>{" "}
        на Яндекс Музыке
      </iframe>
    </>
  );
};

export default FavoriteMusic;
