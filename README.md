# 면접 회고 마이크로 프론트엔드

> Single-Spa Application 구성

## 🚩 목차

-   [🛠️ 기술 스택](#️-기술-스택)
-   [🎥 데모](#-데모)
-   [💡 주요 기능](#-주요-기능)
-   [🧩 컴포넌트 구성](#-컴포넌트-구성)
-   [🚀 실행 방법](#-실행-방법)
-   [📂 폴더 구조](#-폴더-구조)

## 🛠️ 기술 스택

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://ko.vite.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)  
[![React-Query](https://img.shields.io/badge/React_Query-FF4154?style=flat-square&logo=reactquery&logoColor=white)](https://tanstack.com/query/v5/docs/framework/react/overview)
[![React-Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![React-Hook-Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=flat-square&logo=reacthookform&logoColor=white)](https://react-hook-form.com/)  
[![Chakra-UI](https://img.shields.io/badge/Chakra_UI-319795?style=flat-square&logo=chakraui&logoColor=white)](https://www.chakra-ui.com/)
[![Zod](https://img.shields.io/badge/Zod-3E67B1?style=flat-square&logo=zod&logoColor=white)](https://zod.dev/)  
[![Single-SPA](https://img.shields.io/badge/Single_SPA-gray.svg?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgODExLjIxIj48c2NyaXB0IHhtbG5zPSIiIGlkPSJjdXN0b20tdXNlcmFnZW50LXN0cmluZy1wYWdlLXNjcmlwdCIvPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZWU2ODlmO308L3N0eWxlPjwvZGVmcz48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEwOC41NCwyMDAuMzMsNTI4LjQyLDQ3MC40Miw0NDkuMjcsNTgzLjg0LDU5LjM5LDM4Ni4yMmw0OS4xNS0xODUuODlNNzcuNCwxMjAuMTIsMCw0MTIuODZsNDY1LjYxLDIzNkw2MDAsNDU2LjI4LDc3LjQsMTIwLjEyWiIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIyODQuODQgNTU2LjM0IDQ2NS42IDY0OC44NSAxNTQuNjkgODExLjIxIDI4NC44NCA1NTYuMzQiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iNDAxLjA2IDMyOC44NSA3Ny40IDEyMC4xMiA1NjkuMDkgMCA0MDEuMDYgMzI4Ljg1Ii8+PC9nPjwvZz48L3N2Zz4=&style=flat-square&logoColor)](https://single-spa.js.org/)
[![Steiger](https://img.shields.io/badge/FSD_Steiger-211b1d.svg?logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPgo8cGF0aCBkPSJNMCAwIEMyOC4zOCAwIDU2Ljc2IDAgODYgMCBDODYgMy42MyA4NiA3LjI2IDg2IDExIEM1Ny42MiAxMSAyOS4yNCAxMSAwIDExIEMwIDcuMzcgMCAzLjc0IDAgMCBaICIgZmlsbD0iI0VCRUFFQSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcsMTAyKSIvPgo8cGF0aCBkPSJNMCAwIEMyOC4zOCAwIDU2Ljc2IDAgODYgMCBDODYgMy42MyA4NiA3LjI2IDg2IDExIEM1Ny42MiAxMSAyOS4yNCAxMSAwIDExIEMwIDcuMzcgMCAzLjc0IDAgMCBaICIgZmlsbD0iI0VCRUFFQSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcsODcpIi8+CjxwYXRoIGQ9Ik0wIDAgQzI4LjM4IDAgNTYuNzYgMCA4NiAwIEM4NiAzLjYzIDg2IDcuMjYgODYgMTEgQzU3LjYyIDExIDI5LjI0IDExIDAgMTEgQzAgNy4zNyAwIDMuNzQgMCAwIFogIiBmaWxsPSIjRUJFQUVBIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1Nyw1NykiLz4KPHBhdGggZD0iTTAgMCBDMjguMzggMCA1Ni43NiAwIDg2IDAgQzg2IDMuNjMgODYgNy4yNiA4NiAxMSBDNTcuNjIgMTEgMjkuMjQgMTEgMCAxMSBDMCA3LjM3IDAgMy43NCAwIDAgWiAiIGZpbGw9IiNFQkVBRUEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU3LDQyKSIvPgo8cGF0aCBkPSJNMCAwIEMxMy41MyAwIDI3LjA2IDAgNDEgMCBDNDEgMy42MyA0MSA3LjI2IDQxIDExIEMyNy40NyAxMSAxMy45NCAxMSAwIDExIEMwIDcuMzcgMCAzLjc0IDAgMCBaICIgZmlsbD0iI0U5RThFOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcsMTQ3KSIvPgo8cGF0aCBkPSJNMCAwIEMxMy41MyAwIDI3LjA2IDAgNDEgMCBDNDEgMy42MyA0MSA3LjI2IDQxIDExIEMyNy40NyAxMSAxMy45NCAxMSAwIDExIEMwIDcuMzcgMCAzLjc0IDAgMCBaICIgZmlsbD0iI0U5RThFOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcsMTMyKSIvPgo8cGF0aCBkPSJNMCAwIEMxMy41MyAwIDI3LjA2IDAgNDEgMCBDNDEgMy42MyA0MSA3LjI2IDQxIDExIEMyNy40NyAxMSAxMy45NCAxMSAwIDExIEMwIDcuMzcgMCAzLjc0IDAgMCBaICIgZmlsbD0iI0U5RThFOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcsMTE3KSIvPgo8cGF0aCBkPSJNMCAwIEMxMy41MyAwIDI3LjA2IDAgNDEgMCBDNDEgMy42MyA0MSA3LjI2IDQxIDExIEMyNy40NyAxMSAxMy45NCAxMSAwIDExIEMwIDcuMzcgMCAzLjc0IDAgMCBaICIgZmlsbD0iI0U5RThFOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcsNzIpIi8+Cjwvc3ZnPgo=&style=flat-square&logoColor=black)](https://github.com/feature-sliced/steiger)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)](https://eslint.org/)

## 📂 폴더 구조

```
PickMe-Review-Application
├─ .env
├─ .env.sample
├─ .env.single-spa
├─ .prettierrc
├─ index.html
├─ package-lock.json
├─ package.json
├─ setup.ps1
├─ setup.zsh
├─ src
│  ├─ app
│  │  ├─ App.tsx
│  │  ├─ application.tsx
│  │  ├─ main.tsx
│  │  ├─ parcel.tsx
│  │  └─ router.tsx
│  ├─ entities
│  │  └─ review
│  │     └─ model
│  │        └─ review.ts
│  ├─ features
│  │  ├─ review
│  │  │  ├─ api
│  │  │  │  ├─ deleteReviewApi.ts
│  │  │  │  ├─ getReviewApi.ts
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ initialFormData.ts
│  │  │  │  ├─ postReviewApi.ts
│  │  │  │  ├─ putReviewApi.ts
│  │  │  │  └─ reviewDTOList.ts
│  │  │  ├─ hook
│  │  │  │  └─ useReviewMutation.ts
│  │  │  ├─ index.tsx
│  │  │  ├─ schema
│  │  │  │  └─ reviewSchema.ts
│  │  │  ├─ service
│  │  │  │  ├─ dtoToReview.ts
│  │  │  │  └─ reviewToDto.ts
│  │  │  ├─ store
│  │  │  │  └─ useReviewStore.ts
│  │  │  ├─ ui
│  │  │  │  ├─ ActionButton.tsx
│  │  │  │  ├─ DynamicReviewFields.tsx
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ InputField.tsx
│  │  │  │  ├─ InterviewReviewParts.tsx
│  │  │  │  ├─ QuestionsAnswers.tsx
│  │  │  │  ├─ ReviewForm.tsx
│  │  │  │  └─ TextAreaField.tsx
│  │  │  └─ util
│  │  │     ├─ getFieldKeyMap.ts
│  │  │     └─ safeReadDictionary.ts
│  │  └─ side
│  │     ├─ api
│  │     │  ├─ getSideDTO.ts
│  │     │  └─ sideApi.tsx
│  │     ├─ index.tsx
│  │     ├─ store
│  │     │  └─ useSideStore.ts
│  │     └─ ui
│  │        ├─ SearchBar.tsx
│  │        ├─ sectionNav
│  │        │  └─ SectionBar.tsx
│  │        └─ side.tsx
│  ├─ pages
│  │  └─ review
│  │     ├─ index.tsx
│  │     └─ ui
│  │        └─ firstRender.tsx
│  └─ shared
│     ├─ api
│     │  └─ router.ts
│     ├─ chakra-ui
│     │  ├─ close-button.tsx
│     │  ├─ color-mode.tsx
│     │  ├─ drawer.tsx
│     │  ├─ field.tsx
│     │  └─ provider.tsx
│     ├─ data
│     │  └─ ReviewDict.ts
│     └─ store
│        └─ useReviewIdStore.ts
├─ steiger.config.ts
├─ styleguide-types.d.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
├─ vite-env.d.ts
└─ vite.config.ts

```
