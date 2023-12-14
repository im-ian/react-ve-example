import { globalStyle, globalFontFace } from "@vanilla-extract/css";

globalFontFace("Pretendard", {
  src: 'url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-variable.css")',
});

globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("html, body, input", {
  fontFamily: "Pretendard",
  fontSize: "16px",
  lineHeight: "1.5",
  color: "#333",
});
