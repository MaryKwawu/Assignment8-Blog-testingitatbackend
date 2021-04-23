const server = require("../server");
//import server from "../server";
const chai = require("chai");
const chaiHttp = require("chai-http");

//styling method
chai.should();

//milddleware
chai.use(chaiHttp);

describe("Testing Post Controller", () => {
  describe("GET ALL POST", () => {
    it("should return all posts", (done) => {
      chai
        .request(server)
        .get("/post")
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.an("object");

          done();
        });
    });
    it("Should return all posts", (done) => {
      chai
        .request(server)
        .get("/post")
        .end((err, res) => {
          res.should.have.status(404);

          done();
        });
    });
  });

  describe("Get Single Post", () => {
    it("Should return Single post", (done) => {
      const postId = "607836960b9c230714fde698";
      chai
        .request(server)
        .get("/post")
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.an("object");

          done();
        });
    });
    it("Should not return Single Post", (done) => {
      const postId = "607836960b9c230714fde698";
      chai
        .request(server)
        .get(`/posts/${postId}`)
        .end((err, res) => {
          res.should.have.status(404);

          done();
        });
    });
  });

  describe("UPDATE single post", () => {
    it("Should Update a post", (done) => {
      const postId = "607836960b9c230714fde698";
      const body = {
        content: " Update First Post Content",
      };

      chai
        .request(server)
        .patch(`/posts/${postId}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an("object");

          done();
        });
    });
  });
});
