import React, { ChangeEvent, FormEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPaperclip, faAt } from "@fortawesome/free-solid-svg-icons";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { getPostStore } from "../../stores/getPostStore";

const FooterSinglePost = observer(() => {
  const router = useRouter();

  const { id } = router.query;
  const [comment, setComment] = useState({
    id: String(Math.random()),
    idPost: String(id),
    author: "Anonymous",
    comment: "",
  });

  function onChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setComment((prevInfo) => {
      return {
        ...prevInfo,
        [event.target.name]: event.target.value,
      };
    });
  }

  const addComment = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getPostStore.addComment(id!, comment);
    setComment({
      id: String(Math.random()),
      idPost: String(id),
      author: "Anonymous",
      comment: "",
    });
  };
  return (
    <div className="w-screen bg-white fixed bottom-0 border-t border-gray-200 py-5">
      <div className="grid grid-cols-10  text-gray-400 py-2">
        <div className="flex justify-center hover:text-primary">
          <div className="flex justify-center my-auto">
            <FontAwesomeIcon icon={faImage}></FontAwesomeIcon>
          </div>
        </div>
        <div className="flex justify-center hover:text-primary my-auto">
          <div className="flex justify-center">
            <FontAwesomeIcon icon={faPaperclip}></FontAwesomeIcon>
          </div>
        </div>
        <div className="flex justify-center hover:text-primary my-auto">
          <div className="flex justify-center">
            <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
          </div>
        </div>
        <div className="flex justify-center col-span-7 hover:text-primary">
          <form onSubmit={addComment}>
            <div>
              <input
                type="text"
                name="comment"
                placeholder="Comment"
                className="block p-2  w-full text-sm text-gray-900 bg-gray-50 rounded-xl sm:rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value={comment.comment}
                onChange={onChangeInput}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});
export default FooterSinglePost;
