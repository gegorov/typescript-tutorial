interface ILink {
    description?: string;
    id?: number;
    url: string;
    [index: string]: any;
}

type Ilinks = Array<ILink>;
interface IPost extends ILink {
    title: string;
    body: string;
}

const obj1: ILink = {
    url: "string1"
};

const obj2: ILink = {
    url: "string2"
};

const obj3: ILink = {
    url: "string3"
};

const post1: IPost = {
    description: "TypeScript tutorial for beginners is a tutorial for all the JavaScript developers ...",
    id: 1,
    url: "www.valentinog.com/typescript/",
    title: "TypeScript tutorial for beginners",
    body: "some stuff here..."
};

const arrOfLinks: Ilinks = [obj1, obj2, obj3];

const term: string = "java";

function filterByTerm(input: Ilinks, searchTerm: string, lookupKey: string = "url"): Ilinks {
    if (!searchTerm) throw Error("searchTerm cannot be empty");
    if (!input.length) throw Error("input cannot be empty");
    const regex = new RegExp(searchTerm, "i");

    return input.filter(function(arrayElement) {
        return arrayElement[lookupKey].match(regex);
    });
}

filterByTerm(arrOfLinks, term);
