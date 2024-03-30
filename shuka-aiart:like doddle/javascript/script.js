document.addEventListener("DOMContentLoaded", function () {
  const artworksContainer = document.getElementById("artworks");

  // ここにAIアートの作品を取得して表示するロジックを追加する
  // 例えば、以下のように作品を表示できる
  const artworks = [
    {
      title: "作品1",
      imageUrl: "artwork1.jpg",
      description: "これはAIによって生成された作品です。",
    },
    {
      title: "作品2",
      imageUrl: "artwork2.jpg",
      description: "これはAIによって生成されたもう一つの作品です。",
    },
  ];

  artworks.forEach((artwork) => {
    const artworkElement = document.createElement("div");
    artworkElement.classList.add("artwork");

    const imageElement = document.createElement("img");
    imageElement.src = artwork.imageUrl;
    imageElement.alt = artwork.title;

    const titleElement = document.createElement("h2");
    titleElement.textContent = artwork.title;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = artwork.description;

    artworkElement.appendChild(imageElement);
    artworkElement.appendChild(titleElement);
    artworkElement.appendChild(descriptionElement);

    artworksContainer.appendChild(artworkElement);
  });
});
