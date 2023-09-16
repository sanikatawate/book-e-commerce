export const testimonials = [
    {
        profileImg : "https://cdn-icons-png.flaticon.com/128/1999/1999625.png",
        review: "I was  introduced to Harry Potter books by my grandson – a definitive enthusiast and a compulsive reader and re reader of all the novels. Having just completed my first book in this intriguing series I can now understand why he is so keen on them.",
        user: "Jennie",
    },
    {
        profileImg : "https://cdn-icons-png.flaticon.com/128/6997/6997662.png",
        review: "J K Rowling’s phenomenal imagination has created a stimulating fantasy world with the power to excite and involve readers of all ages - fantasy being an emotion in no way confined to children.",
        user: "Jennie",
    },
    {
        profileImg : "https://cdn-icons-png.flaticon.com/128/219/219970.png",
        review: "Harry Potter and the Philosopher 's Stone is the entry to a world of fabulous fantasy and magic that any kid can dream of. The whole book 's plot is top-notch, taking the readers along the journey with a orphaned boy in a lonely world to a whole new spectacular universe",
        user: "Jennie",
    },
    // {
    //     profileImg : "https://cdn-icons-png.flaticon.com/128/1999/1999625.png",
    //     review: "Turning up the party, now 하늘엔 내 발이 wow 사람들은 ha ha, high 내 귓속에는 la la, loud 눈부셔 baby 이 조명 shining We're in love with this carnival 사실 무서워 난 (ah) 출렁이는 잔 속 이 취한 세계 그 끝엔 목이 타는 내 맘 (ah) But I just wanna stay",
    //     user: "Jennie",
    // },
    // {
    //     profileImg : "https://cdn-icons-png.flaticon.com/128/1999/1999625.png",
    //     review: "Turning up the party, now 하늘엔 내 발이 wow 사람들은 ha ha, high 내 귓속에는 la la, loud 눈부셔 baby 이 조명 shining We're in love with this carnival 사실 무서워 난 (ah) 출렁이는 잔 속 이 취한 세계 그 끝엔 목이 타는 내 맘 (ah) But I just wanna stay",
    //     user: "Jennie",
    // },
];
interface testimonials {
    profileImg: string;
    review: string;
    user: string;
    }

export const Books = [
    {
        "id":1,
        "name": "Harry Potter and the Philosopher’s Stone",
        "price": 10.99,
        "imgUrl": new URL('/src/assets/book1.jpg', import.meta.url).href,
    },
    {
        "id":2,
        "name": "Harry Potter and the Chamber of Secrets",
        "price": 10.99,
        "imgUrl": new URL('/src/assets/book2.jpg', import.meta.url).href
    },
    {
        "id":3,
        "name": "Harry Potter and the Prisoner of Azkaban",
        "price": 10.99,
        "imgUrl": new URL('/src/assets/book3.jpg', import.meta.url).href
    },
    {
        "id":4,
        "name": "Harry Potter and the Goblet of Fire",
        "price": 10.99,
        "imgUrl": new URL('/src/assets/book4.jpg', import.meta.url).href
    },
    {
        "id":5,
        "name": "Harry Potter and the Order of the Phoenix",
        "price": 10.99,
        "imgUrl": new URL('/src/assets/book5.jpg', import.meta.url).href
    },
    {
        "id":6,
        "name": "Harry Potter and the Half-Blood Prince",
        "price": 10.99,
        "imgUrl": new URL('/src/assets/book6.jpg', import.meta.url).href
    },
    {
        "id":7,
        "name": "Harry Potter and the Deathly Hallows",
        "price": 10.99,
        "imgUrl": new URL('/src/assets/book7.jpg', import.meta.url).href
    },
];
interface Books {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
    }