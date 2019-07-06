const sequelize = require("../../src/db/models/index").sequelize;
const Topic = require("../../src/db/models").Topic;
const Post = require("../../src/db/models").Post;

describe("Topic", () => {
  beforeEach((done) => {
    this.topic;
    this.post;
    sequelize.sync({
      force: true
    }).then((res) => {
      Topic.create({
          title: "The Simpsons",
          description: "A discussion about the Simpsons."
        })
        .then((topic) => {
          this.topic = topic;
          Post.create({
              title: "Homer",
              body: "Homer Simpson is very funny.",
              topicId: this.topic.id
            })
            .then((post) => {
              this.post = post;
              done();
            });
        })
        .catch((err) => {
          console.log(err);
          done();
        });
    });
  });
  describe("#create()", () => {
    it("should create a topic object with a title and a body", (done) => {
      Topic.create({
          title: "Another topic about The Simpsons",
          body: "We need more topics about the Simpsons!",
          topicId: this.topic.id
        })
        .then((post) => {
          expect(post.title).toBe("Another topic about The Simpsons");
          expect(post.body).toBe("We need more topics about the Simpsons!");
          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        });
    });
  });
  describe("#getPosts()", () => {
    it("should return the associated posts", (done) => {
      this.topic.getPosts()
        .then((posts) => {
          expect(posts[0].title).toBe("Homer");
          done();
        });
    });
  });
});