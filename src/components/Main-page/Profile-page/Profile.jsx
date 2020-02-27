import React from "react";
import "./Profile.scss";

const Profile = () => {
    return (
        <main className="app-main">
            <div className="inner-container">
                <div className="main-wrapper-picture"></div>
                <div className="main-info-wrapper">
                    <div className="main-profile-info">
                        <div className="profile-avatar"></div>
                        <div className="profile-info">
                            <ul className="profile-info-data">
                                <li>Name</li>
                                <li>Date of Birth:</li>
                                <li>City:</li>
                                <li>Education:</li>
                                <li>Web site:</li>
                            </ul>
                        </div>
                    </div>
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
                </div>
            </div>
        </main>
    )
};

export default Profile;