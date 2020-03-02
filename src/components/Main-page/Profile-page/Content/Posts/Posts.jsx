import React from "react";
import './Posts.scss';

const Posts = () => {
    return (
        <div className="main-posts-field">
            <p>My posts</p>
            <textarea name="new-post-field"
                      id="newPostField"
                      cols="1"
                      rows="4"
                      placeholder="your news..."></textarea>
            <button>Send</button>
            <article className="post-instance">
                <div className="post-instance-wrapper">
                    <div className="post-instance-avatar"></div>
                    <div className="post-data">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                           Assumenda atque dicta dolore dolorum ex id in necessitatibus
                           numquam pariatur perspiciatis praesentium quae quam rem
                           soluta tempora temporibus vel vero, voluptatum. Lorem ipsum dolor sit amet,
                           consectetur adipisicing elit. Accusantium ad adipisci aliquam assumenda
                           consectetur dolorum ipsam omnis, ratione saepe veniam! Assumenda corporis
                           inventore iusto labore magni quam quisquam repellat sint! Lorem ipsum dolor
                           sit amet, consectetur adipisicing elit. Accusamus amet at explicabo harum
                           iste nemo quam quisquam sequi sunt vero! Blanditiis dolorem, est
                           exercitationem magnam minus molestiae nemo temporibus voluptatem?</p>
                    </div>
                </div>
            </article>
        </div>
    )
};

export default Posts;