import { useEffect, useState } from "react";

export type Room = {
  id: number;
  title: string;
  price: string;
  guestsLimit: number;
  description: string;
  rules: string;
  country: string;
  city: string;
  reviewsNr: number;
  review: number;
  images: string[];
};

export function Home({ rooms }: any) {
  //   const [rooms, setRooms] = useState(data);

  return (
    <>
      {rooms && (
        <div>
          <h1>Home</h1>
          <div>
            <h2>Rooms</h2>
            {rooms.map((room: Room) => (
              <div key={room.id}>
                <h3>{room.title}</h3>
                {/* <p>{room.description}</p>
            <p>{room.price}</p>
            <p>{room.guestsLimit}</p>
            <p>{room.country}</p>
            <p>{room.city}</p>
            <p>{room.reviewsNr}</p>
            <p>{room.review}</p>
            <p>{room.images}</p> */}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
