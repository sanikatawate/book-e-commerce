import { useContext, createContext, useState, useEffect, ReactNode } from "react";

type Book = {
    Stock: Number
    author: String
    description: String
    genre: []
    imageUrl: String
    name:String
    price: Number
    rating: Number
    updatedAt: Date
    createdAt: Date
    _id: Number
}

type BookContextType = {
    books : Book[]
}

type BookContextProvider = {
    children: ReactNode;
}

const BookContext = createContext({} as BookContextType)

export function useBooksData(){
    return useContext(BookContext)
}

export function BookContextProvider({ children }:BookContextProvider){
    console.log("object")
    const [books , setBooks] = useState<Book[]>([])
    useEffect(() => {
        fetch("http://localhost:5000/books")
          .then((response) => response.json())
          .then((data) => {
            console.log(data.books);
            setBooks(data.books);
          });
      }, []);
    
    return (
        <BookContext.Provider value={{books}}>
            {children}
        </BookContext.Provider>
    )
}