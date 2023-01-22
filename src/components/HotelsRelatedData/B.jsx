export default function B({ img1, img2, img3, img4 }) {
  const img5 =
    "https://images.trvl-media.com/lodging/1000000/910000/908400/908326/bbe80b35.jpg?impolicy=resizecrop&rw=297&ra=fit";
  return (
    <>
      <div className="hoteldata_b">
        {/*  */}
        <div>
          <div>
            <img src={img1} alt="img" />
          </div>
        </div>
        <div>
          <div>
            <img src={img2} alt="img" />
          </div>
          <div>
            <img src={img3} alt="img" />
          </div>
          <div>
            <img src={img4} alt="img" />
          </div>
          <div>
            <img src={img5} alt="img" />
          </div>
        </div>
        <div></div>
        {/*  */}
      </div>
    </>
  );
}
