import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/index";
import CardTitle from "./components/Card/CardTitle";
import CardBody from "./components/Card/CardBody";
import CardIcon from "./components/Card/CardIcon";
export default function App() {
    return (
        <>
            <div class="flex">
                <BadgeView />
            </div>
            <div class="flex">
                <BannerView />
            </div>
            <div class="flex">
                <CardView />
            </div>
        </>
    );
}

const CardView = () => {
    return (
        <>
            <Card>
                <CardIcon>
                    <img src="./assets/Cloudupload.png" />
                </CardIcon>
                <CardTitle>Easy Deployment</CardTitle>
                <CardBody>
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                </CardBody>
            </Card>
        </>
    );
};

const BadgeView = () => {
    const shape = ["square", "pill"];
    const color = [
        "gray",
        "red",
        "green",
        "purple",
        "indigo",
        "pink",
        "yellow",
        "blue",
    ];
    return color.map((c) => {
        return shape.map((s) => {
            return (
                <>
                    <Badge key={c + s} color={c} shape={s}>
                        Badge
                    </Badge>
                    <br />
                    <br />
                </>
            );
        });
    });
};

const BannerView = () => {
    const type = ["success", "warning", "error", "neutral"];

    return (
        <>
            {type.map((t) => {
                return (
                    <Banner type={t} title="Banner" info={"this is title"}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Autem possimus nobis veritatis facere, cumque animi sed
                        sapiente minima doloribus fugiat veniam impedit aperiam,
                        ut perspiciatis totam rerum maiores. Adipisci,
                        voluptatum.
                    </Banner>
                );
            })}
        </>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
