import React from "react";

function useLocalStorage(itemName, initialValue) {

  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {

    setTimeout(() => {
      try{
      const localStorageItem = localStorage.getItem(itemName); 

      let parsedItem;

      if (!localStorageItem) { 
      localStorage.setItem(itemName, JSON.stringify(initialValue)); 
      parsedItem = initialValue; 
      }else { 
      parsedItem = JSON.parse(localStorageItem);
      setItem(parsedItem);
      }

      setLoading(false);
      }

      catch(error){
      setLoading(false);
      setError(true);
      }
    },2000);

  }, []);

  const saveItem = (newItems) => { 
    localStorage.setItem(itemName, JSON.stringify(newItems)); 
    setItem(newItems); 
  }

  return {
    item, saveItem, loading, error
  };

};


export { useLocalStorage };


//const defaultTodos = [
  //{ text: "Desayunar", completed: false},
  //{ text: "Limpiar mi habitacion", completed: false},
  //{ text: "Hacer los deberes", completed: false},
  //{ text: "Ir a clase de inglés", completed: false},
  //{ text: "Ir ak gimnasio", completed: false},
  //{ text: "Ducharme", completed: false},
  //{ text: "Hacer la cama", completed: false},
//];

//localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));
// localStorage.removeItem("TODOS_V1");