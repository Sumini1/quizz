import { createSlice } from "@reduxjs/toolkit";

const quiz = [
  {
    id: 1,
    score: 0,
    progress: 0,
    endTime: null,
    startTime: null,
    category: "Pemula",
    subCategory: [
      {
        id: 1,
        name: "Aqidah",
        questions: [
          {
            id: 1,
            question: "Apa kitab suci umat Islam?",
            user_answer: false,
            correct_answer_id: 3,
            answers: [
              { id: 1, answer: "Kitab Suci" },
              { id: 2, answer: "Buku Agama" },
              { id: 3, answer: "Al-Qur'an" },
              { id: 4, answer: "Dokumen Sejarah" },
            ],
          },
          {
            id: 2,
            question: "Rukun Iman ada berapa?",
            user_answer: false,
            correct_answer_id: 4,
            answers: [
              { id: 1, answer: "3" },
              { id: 2, answer: "4" },
              { id: 3, answer: "5" },
              { id: 4, answer: "6" },
            ],
          },
          {
            id: 3,
            question: "Berapa jumlah malaikat yang wajib diketahui?",
            user_answer: false,
            correct_answer_id: 3,
            answers: [
              { id: 1, answer: "5" },
              { id: 2, answer: "8" },
              { id: 3, answer: "10" },
              { id: 4, answer: "12" },
            ],
          },
          {
            id: 4,
            question: "Apa itu zakat?",
            user_answer: false,
            correct_answer_id: 3,
            answers: [
              { id: 1, answer: "Sumbangan sukarela" },
              { id: 2, answer: "Wajib haji" },
              { id: 3, answer: "Zakat mal" },
              { id: 4, answer: "Sedekah sunnah" },
            ],
          },
          {
            id: 5,
            question: "Apa itu syahadat?",
            user_answer: false,
            correct_answer_id: 3,
            answers: [
              { id: 1, answer: "Ucapan pujian" },
              { id: 2, answer: "Tantangan iman" },
              { id: 3, answer: "Pernyataan keimanan" },
              { id: 4, answer: "Zakat wajib" },
            ],
          },
          {
            id: 6,
            question: "Apa itu zakat fitrah?",
            user_answer: false,
            correct_answer_id: 3,
            answers: [
              { id: 1, answer: "Sumbangan sukarela" },
              { id: 2, answer: "Wajib haji" },
              {
                id: 3,
                answer:
                  "Zakat yang wajib dibayarkan oleh setiap muslim yang mampu pada bulan Ramadhan dan Idul Fitri",
              },
              { id: 4, answer: "Sedekah sunnah" },
            ],
          },

          {
            id: 7,
            question: "Apa itu zakat maal?",
            user_answer: false,
            correct_answer_id: 3,
            answers: [
              { id: 1, answer: "Sumbangan sukarela" },
              { id: 2, answer: "Wajib haji" },
              {
                id: 3,
                answer:
                  "zakat yang wajib dikeluarkan oleh umat Islam atas harta yang telah mencapai nisab dan haul ",
              },
              { id: 4, answer: "Sedekah sunnah" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    category: "Menengah",
    subCategory: [], // Kategori lanjutan dapat ditambahkan di sini
  },
];
