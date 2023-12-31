const Get = async () => {
  try {
    const response = await fetch(
      "https://test101.ustangelicum.edu.ph/api/product"
    );

    if (!response.ok) {
      alert("Error fetching data!");
      return [];
    }

    return await response.json();
  } catch (error) {
    alert("Error fetching data!");
    return [];
  }
};

const Post = async (product) => {
  try {
    const response = await fetch(
      "https://test101.ustangelicum.edu.ph/api/product",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );

    if (!response.ok) {
      alert("Error in saving data!");
      return;
    }

    return;
  } catch (error) {}
};

const Search = async (key) => {
  try {
    const response = await fetch(
      "https://test101.ustangelicum.edu.ph/api/product?key=" + key
    );

    if (!response.ok) {
      alert("Error fetching data!");
      return [];
    }

    return await response.json();
  } catch (error) {}
};

const Delete = async (id) => {
  try {
    const response = await fetch(
      "https://test101.ustangelicum.edu.ph/api/product/" + id,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      alert("Error in deleting data!");
    }

    return;
  } catch (error) {}
};

const Put = async (id, product) => {
  try {
    const response = await fetch(
      "https://test101.ustangelicum.edu.ph/api/product/" + id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );

    if (!response.ok) {
      alert("Error in updating the data!");
      return;
    }

    return;
  } catch (error) {}
};

export { Get, Post, Search, Delete, Put };
