export type UserType = {
    // map(arg0: (user: any) => JSX.Element): import("react").ReactNode;
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    phone: string;
    date_of_birth: string;
    instagram_blog: string;
    isAdmin: boolean;
};

export type MuseumType = {
    name: string;
    imageUrl: string;
    latitude: number;
    longitude: number;
}

export type firebaseApp = {
    firestore: any;
}





