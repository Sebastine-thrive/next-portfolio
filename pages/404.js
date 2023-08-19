import Link from "next/link";
import Image from "next/image";
import LeftArrow from "../public/assets/icons/left-arrow.png";

function Error({ statusCode }) {
  return (
    <div className="w-[100vw] h-[100vh] flex-col flex justify-center text-center items-center xs:text-[10px] sm:text-[14px] md:text-[18px] lg:text-[22px]">
      <p>
        {statusCode ? `An error ${statusCode} occurred ` : "An error occurred"}
      </p>
      <div className="my-6 xs:text-[12px] sm:text-[16px] md:text-[20px] lg:text-[22px] text-black">
        <p> Looking for Sebastine?</p>

        <div className="p-4 my-4 flex justify-center items-center ">
          <Image src={LeftArrow} alt="left arrow indicator" />{" "}
          <Link href="/">
            <button> Go Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
