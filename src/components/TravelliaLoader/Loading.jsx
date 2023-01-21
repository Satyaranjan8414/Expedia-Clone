import "./Loading.css";
import { Spinner } from "@chakra-ui/react";
export default function Loading() {
  return (
    <div className="loader_container">
      <div className="Loaderwrapper">
        <div className="TLogoUrl">
          <img src="https://i.imgur.com/wQLmi8a.png" alt="" />
        </div>
        <div style={{ marginTop: "20px" }}>
          <Spinner
            thickness="5px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="lg"
          />
        </div>
      </div>
    </div>
  );
}
