/* eslint-disable no-underscore-dangle */
/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
/* eslint-disable import/extensions */
import TopUpForm from "../../components/organisms/TopUpForm";
import TopUpItem from "../../components/organisms/TopUpItem";
import Navbar from "../../components/organisms/Navbar";
import Footer from "../../components/organisms/Footer";
// import { useRouter } from "next/router";
// import { useCallback, useEffect, useState } from "react";
import { getDetailVoucher, getFeaturedGame } from "../../services/player";
import { useEffect } from "react";

/* eslint-disable jsx-a11y/label-has-associated-control */
export default function Detail({ details, nominals, payments }: any) {
  useEffect(() => {
    localStorage.setItem("data-item", JSON.stringify(details));
  });

  // const { query, isReady } = useRouter();
  // const [details, setDetails] = useState({
  //   name: "",
  //   category: {
  //     name: "",
  //   },
  //   thumbnail: "",
  // });

  // const [nominals, setNominals] = useState([]);

  // const [payments, setPayments] = useState([]);

  // const getVoucherDetailAPI = useCallback(async (id) => {
  //   const data: any = await getDetailVoucher(id);
  //   setDetails(data.data);
  //   localStorage.setItem("data-item", JSON.stringify(data.data));
  //   setNominals(data.data.nominals);
  //   setPayments(data.data.payments);
  // }, []);

  // useEffect(() => {
  //   if (isReady) {
  //     getVoucherDetailAPI(query.id);
  //   } else {
  //   }
  // }, [isReady]);

  return (
    <>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
              Top Up
            </h2>
            <p className="text-lg color-palette-1 mb-0">
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <TopUpItem data={details} type="mobile" />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopUpItem data={details} type="desktop" />
              <hr />
              <TopUpForm nominals={nominals} payments={payments} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const data = await getFeaturedGame();
  const paths = data.data.map((item: any) => {
    return { params: { id: item._id } };
  });
  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    id: string;
  };
}

export async function getStaticProps({ params }: GetStaticProps) {
  const { id } = params;
  const data: any = await getDetailVoucher(id);

  return {
    props: {
      details: data.data,
      nominals: data.data.nominals,
      payments: data.data.payments,
    },
  };
}
