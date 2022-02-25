/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable quotes */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/function-component-definition */
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { setSignUp } from "../services/auth";
import { getGameCategory } from "../services/player";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function SignUpPhoto() {
  const [categories, setCategories] = useState([]);
  const [favorite, setFavorite] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [localForm, setLocalForm] = useState({
    fullname: "",
    email: "",
  });

  const router = useRouter();

  const getGameCategoryAPI = useCallback(async () => {
    const response: any = await getGameCategory();

    setCategories(response.data);
    setFavorite(response.data[0]._id);
  }, []);

  useEffect(() => {
    getGameCategoryAPI();
  }, []);

  useEffect(() => {
    const local: any = localStorage.getItem("user-form");
    const userForm: any = JSON.parse(local);
    setLocalForm(userForm);
  }, []);

  const onSubmit = async () => {
    const local: any = await localStorage.getItem("user-form");
    const userForm: any = JSON.parse(local);
    const data = new FormData();

    data.append("image", image);
    data.append("email", userForm.email);
    data.append("fullname", userForm.fullname);
    data.append("username", userForm.email);
    data.append("password", userForm.password);
    data.append("phoneNumber", "089567897687");
    data.append("role", "user");
    data.append("status", "Y");
    data.append("favorite", favorite);

    const result = await setSignUp(data);
    if (result.error) {
      toast.error(result.message);
    } else {
      toast.success("Register Successfully");
      router.push("/sign-up-success");
      localStorage.removeItem("user-form");
    }
  };
  return (
    <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
      <div className="container mx-auto">
        <form action="">
          <div className="form-input d-md-block d-flex flex-column">
            <div>
              <div className="mb-20">
                <div className="image-upload text-center">
                  <label htmlFor="avatar">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="upload-logo"
                        className="img-upload"
                      />
                    ) : (
                      <Image
                        src="/icon/upload.svg"
                        alt="upload-logo"
                        width={120}
                        height={120}
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
                      return setImage(img);
                    }}
                  />
                </div>
              </div>
              <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                {localForm.fullname}
              </h2>
              <p className="text-lg text-center color-palette-1 m-0">
                {localForm.email}
              </p>
              <div className="pt-50 pb-50">
                <label
                  htmlFor="category"
                  className="form-label text-lg fw-medium color-palette-1 mb-10"
                >
                  Favorite Game
                </label>
                <select
                  id="category"
                  name="category"
                  className="form-select d-block w-100 rounded-pill text-lg"
                  aria-label="Favorite Game"
                  value={favorite}
                  onChange={(event) => {
                    setFavorite(event.target.value);
                  }}
                >
                  {categories.map((category: any) => {
                    return (
                      <option key={category._id} value={category._id} selected>
                        {category.name}
                      </option>
                    );
                  })}
                  {/* <option value="rpg">Role Playing Game</option>
                  <option value="arcade">Arcade</option>
                  <option value="sport">Sport</option> */}
                </select>
              </div>
            </div>

            <div className="button-group d-flex flex-column mx-auto">
              <button
                className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                type="button"
                onClick={() => {
                  onSubmit();
                }}
              >
                Create My Account
              </button>
              <a
                className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
                href="/#"
                role="button"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
