/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable quotes */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */

import { useEffect, useState } from "react";
import Forms from "../../components/atoms/Forms";
import SideBar from "../../components/organisms/SideBar";
import Cookies from "js-cookie";
import { JWTPayloadTypes } from "../../services/data-types";
import jwtDecode from "jwt-decode";
import { updateProfile } from "../../services/member";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

/* eslint-disable react/function-component-definition */
export default function EditProfile() {
  const [imagePreview, setImagePreview] = useState(null);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    avatar: "",
  });

  const router = useRouter();
  useEffect(() => {
    const token: any = Cookies.get("token");
    const jwtToken: JWTPayloadTypes = jwtDecode(atob(token));
    let userDecode: any = jwtToken.player;

    userDecode = {
      avatar: `${process.env.NEXT_PUBLIC_API}/uploads/${userDecode.avatar}`,
      username: userDecode.username,
      email: userDecode.email,
      name: userDecode.name,
      phone: userDecode.phoneNumber,
    };
    setUser(userDecode);
  }, []);

  const onSubmit = async () => {
    const data = new FormData();
    data.append("image", user.avatar);
    data.append("name", user.name);
    const response = await updateProfile(data);
    if (response.error) {
      toast.error(response.message);
    } else {
      Cookies.remove("token");
      router.push("/sign-in");
    }
  };
  return (
    <section className="edit-profile overflow-auto">
      <SideBar menu="settings" />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="image-upload">
                  <label htmlFor="avatar">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        width="90"
                        height="90"
                        className="rounded-circle"
                      />
                    ) : (
                      <img
                        src={user.avatar}
                        width="90"
                        height="90"
                        className="rounded-circle"
                      />
                    )}
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(event: any) => {
                      const img = event.target.files[0];
                      const cretaeObj: any = URL.createObjectURL(img);
                      setImagePreview(cretaeObj);
                      return setUser({
                        ...user,
                        avatar: img,
                      });
                    }}
                  />
                </div>
              </div>
              <Forms
                label="Full Name"
                placeholder="Enter Your Name"
                type="text"
                id="name"
                name="name"
                aria-describedby="name"
                value={user.name}
                onChange={(event: any) => {
                  setUser({
                    ...user,
                    name: event.target.value,
                  });
                }}
              />
              <Forms
                label="Email Address"
                placeholder="Enter Your Email Address"
                type="email"
                id="email"
                name="email"
                aria-describedby="email"
                value={user.email}
                disabled
              />
              <Forms
                label="Phone"
                placeholder="Enter Your Phone Number"
                type="tel"
                id="phone"
                name="phone"
                aria-describedby="email"
                value={user.phone}
                disabled
              />
              <div className="button-group d-flex flex-column pt-50">
                <button
                  type="button"
                  className="btn btn-save fw-medium text-lg text-white rounded-pill"
                  onClick={onSubmit}
                >
                  Save My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}

export const getServerSideProps = async ({ req }: any) => {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
