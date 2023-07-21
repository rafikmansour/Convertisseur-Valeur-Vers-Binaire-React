import React, { useState } from "react";

const BinaryConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [binaryValue, setBinaryValue] = useState("");

  // Fonction pour convertir une valeur en binaire
  const convertToBinary = () => {
    const value = parseInt(inputValue); // Convertir l'entrée en nombre

    // Vérifier si l'entrée est un nombre valide
    if (isNaN(value)) {
      setBinaryValue("Veuillez saisir une valeur numérique valide.");
      return;
    }

    // Convertir la valeur en binaire à l'aide de la méthode toString() avec la base 2
    const binary = value.toString(2);
    setBinaryValue(binary);
  };

  // Gérer le changement de la valeur saisie
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Gérer la soumission du formulaire de conversion
  const handleConvert = (e) => {
    e.preventDefault(); // Empêcher le rechargement de la page
    convertToBinary();
  };

  return (
    <div>
      <h2>Convertisseur en binaire</h2>
      <form onSubmit={handleConvert}>
        <label>
          Valeur :
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
        <button type="submit">Convertir</button>
      </form>
      <div>Résultat en binaire : {binaryValue}</div>
    </div>
  );
};

export default BinaryConverter;
