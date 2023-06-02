import { notifyExplosionCompletion } from "./api";

export const indexKeyList = [...Array(7)].map((_, index) => index);

export const videoFileNameList = [
    "explosion-simple.mp4",
    "explosion-wide.mp4",
    "explosion-yellow.mp4",
];

const explosionNum = 7;

export const counter = {
    value: 0,
    incrementCounter: () => {
        navigator.locks.request("counter", async (_lock) => {
            ++counter.value;
            if (counter.value == explosionNum) {
                console.log("all movie was clicked");
                notifyExplosionCompletion({ id: imageId.value });
            }
        });
    },
};

export const completeTask = () => {
    window.location.href = "./html/finish.html";
};

export const imageId = {
    value: "",
    set: (id: string) => {
        imageId.value = id;
    },
};

export const getRandom = (size = 4) => (Math.random() * 2 - 1) * size;

const getRandomElement = <T>(array: T[]): T | undefined => {
    if (array.length === 0) {
        return undefined;
    }

    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

export const getRandomVideo = () => getRandomElement(videoFileNameList);

export const redirectTo404 = () => {
    window.location.href = "./html/404.html";
};
