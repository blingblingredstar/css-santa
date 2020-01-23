const styleStr = `
.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

.wrapper::after {
  content: "";
  position: absolute;
  width: 340px;
  height: 340px;
  background: #fff;
  top: -20px;
  border-radius: 50%;
  background: var(--avatar-bg-color);
  border: 10px solid var(--white-color);
  z-index: -2;
}

.santa {
  position: relative;
  width: 180px;
  height: 300px;
}

.hat {
  position: absolute;
  background: var(--hat-color);
  width: 100%;
  height: 90px;
  top: 30px;
  border-radius: 100px 100px 0 0;
  box-shadow: var(--box-shadow);
  z-index: 1;
}

.hat::after {
  content: "";
  position: absolute;
  width: 120%;
  height: 48px;
  background: var(--white-color);
  border-radius: 50px;
  top: 70px;
  margin-left: -10%;
  box-shadow: var(--box-shadow);
}

.hat::before {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  background: var(--white-color);
  border-radius: 50%;
  top: -30px;
  left: 0;
  right: 0;
  margin: 0 auto;
  box-shadow: var(--box-shadow);
}

.ear {
  position: absolute;
  width: 40px;
  height: 40px;
  background: var(--skin-color);
  top: 174px;
  border-radius: 50%;
  z-index: -2;
}

.ear.left {
  left: -24px;
}

.ear.right {
  right: -24px;
}

.face {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 170px;
  border-radius: 0 0 120px 120px;
  overflow: hidden;
}

.face i,
.face i {
  position: absolute;
  width: 45%;
  height: 45%;
  background: var(--skin-color);
  top: 0;
  display: block;
  border-radius: 0 0 45% 45%;
  overflow: hidden;
}

.face i:nth-of-type(1) {
  left: 5%;
}

.face i:nth-of-type(2) {
  right: 5%;
}

.eye {
  position: absolute;
  width: 18px;
  height: 18px;
  background: var(--eye-color);
  top: 30px;
  border-radius: 50%;
}

.eye.left {
  left: 55px;
}

.eye.right {
  right: 55px;
}

.nose {
  position: absolute;
  width: 30px;
  height: 30px;
  background: var(--hat-color);
  top: 48px;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 50%;
}

.beard {
  position: absolute;
  width: 100%;
  height: 180px;
  background: var(--beard-color);
  bottom: 0;
  border-radius: 0 0 200px 200px;
  box-shadow: var(--box-shadow-beard);
  z-index: -1;
}

.message {
  display: flex;
  align-items: center;
  color: var(--white-color);
  margin-top: 40px;
  font-family: "Great Vibes", cursive;
  font-style: normal;
  font-size: 2rem;
  margin-bottom: 0;
  white-space: nowrap;
}

.wrapper:hover {
  animation: rock infinite 1s;
}

@keyframes rock {
  0% {
    transform: rotate(-1deg);
  }
  50% {
    transform: rotate(2deg);
  }
  100% {
    transform: rotate(-1deg);
  }
}
`;

export default styleStr;
