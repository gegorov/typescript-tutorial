interface ILink {
    description?: string;
    id?: number;
    url: string;
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

const arrOfLinks: Array<ILink> = [obj1, obj2, obj3];

const term: string = "java";

function filterByTerm(input: Array<ILink>, searchTerm: string) {
    if (!searchTerm) throw Error("searchTerm cannot be empty");
    if (!input.length) throw Error("input cannot be empty");
    const regex = new RegExp(searchTerm, "i");
    return input.filter(function(arrayElement) {
        return arrayElement.url.match(regex);
    });
}

filterByTerm(arrOfLinks, "java");
