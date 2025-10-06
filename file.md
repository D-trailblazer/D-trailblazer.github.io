main {
   margin-left: 280px;
   padding: 3rem 2rem;
   display: flex;
   flex-direction: column;
   gap: 4rem;

   .work,
   .about {
      margin-bottom: 6rem;
   }
}

/* ==== Work section ==== */

section.work {
   display: flex;
   flex-direction: column;
   gap: 5rem;

   h1 {
      font-size: clamp(2rem, 3vw, 2.8rem);
      margin-bottom: 3rem;
      text-align: left;
   }

   .project {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
      align-items: center;
      background: var(--color-dark);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: var(--radius);
      padding: 3rem;
      padding-bottom: 3rem;
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 0.8s ease, transform 0.8s ease;

      &:hover {
         box-shadow: 0 8px 24px rgba(255, 255, 255, 0.15);
         transform: translateY(-5px);
         transition: all 0.3s ease;

      }

      img {
         width: 100%;
         border-radius: var(--radius);
         transition: transform 0.3s ease;

         &:hover {
            transform: scale(1.05);

         }
      }

      .description {
         h2 {
            margin-bottom: 0.8rem;
            font-size: clamp(1.4rem, 2vw, 1.8rem);
            color: var(--color-light);
         }

         p {
            margin-bottom: 1rem;
            color: var(--color-accent);
         }
      }

      .view-more-btn {
         color: var(--color-light);
         border: 1px solid var(--color-accent);
         padding: 0.6rem 1.2rem;
         border-radius: var(--radius);
         text-decoration: none;
         transition: var(--transition);
         display: inline-block;
         cursor: pointer;

         &:hover {
            background: var(--color-light);
            color: var(--color-dark);
         }
      }

   }

   /* On page load */

   .project.reveal {
      opacity: 1;
      transform: translateY(0);
   }
}



/* About */
section.about {
   background: linear-gradient(135deg, var(--color-dark), var(--color-gray));
   padding: 3.5rem 2rem;
   border-radius: var(--radius);
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 2rem;
   opacity: 0;
   transform: translateY(40px);
   transition: opacity 0.8s ease, transform 0.8s ease;

   h4 {
      font-size: clamp(1.5rem, 2vw, 2rem);
      text-align: center;
      color: var(--color-light);
   }

   .bio {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 1.2rem;
      max-width: 1110px;
      margin: 0 auto;


      .column {
         flex: 1 1 48.3%;
         max-width: 48.3%;
      }

      .column:first-child {

         /* display: flex; */
         /* justify-content: flex-end; keep image closer to text */
         img {
            width: 100%;
            max-width: 420px;
            border-radius: var(--radius);
            border: 3px solid var(--color-light);
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
            object-fit: cover;
         }
      }

      .column {
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: flex-start;
         /* left align text */
         text-align: left;

         p {
            font-size: clamp(1rem, 1.2vw, 1.15rem);
            line-height: 1.7;
            color: var(--color-light);
            margin-bottom: 1rem;

            &:first-of-type {
               font-weight: 600;
               margin-bottom: 1.2rem;
               text-align: left;
            }

            b {
               display: block;
               text-align: left;
            }
         }

         .socials {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            /* align icons to the left */
            gap: 1.2rem;
            margin-top: 1.5rem;

            a {
               color: var(--color-light);
               transition: transform 0.3s ease, color 0.3s ease;

               &:hover {
                  color: var(--color-accent);
                  transform: translateY(-3px);
               }
            }
         }
      }
   }

   @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      text-align: center;

      .column {
         max-width: 100%;
         align-items: center;
      }

      .column {
         align-items: center;

         .socials {
            justify-content: center;
         }
      }
   }
}


/* On page load */
section.about.reveal {
   opacity: 1;
   transform: translateY(0);
}


/* Contact */
section.contact {
   background: var(--color-dark);
   border-radius: var(--radius);
   padding: 3.5rem 2rem;
   text-align: center;
   opacity: 0;
   transform: translateY(40px);
   transition: opacity 0.8s ease, transform 0.8s ease;

   h2 {
      margin-bottom: 1.5rem;
      font-size: clamp(1.6rem, 2.5vw, 2.1rem);
   }

   p {
      margin-bottom: 1rem;
   }

   form {
      margin: auto;
      max-width: 900px;
      color: var(--color-light);

      .form-row {
         display: flex;
         justify-content: space-between;
         margin-bottom: 1rem;
      }

      .form-col {
         /* border: 1px solid red; */
         /* gap: 1rem; */
         display: flex;
         flex-direction: column;
         width: 100%;


         label {
            font-size: 1rem;
            margin-bottom: 0.5rem;
            text-align: left;
            color: var(--color-light);
            display: block;
            width: 100%;
         }

         input {
            display: block;
            padding: 0.9rem;
            border-radius: var(--radius);
            border: none;
            outline: none;
            font-size: 1rem;
            color: var(--color-bg);
            transition: all 0.2s ease;
            width: 97%;

            &:focus {
               border: 1px solid var(--color-dark);
               box-shadow: 0 0 6px rgba(255, 255, 255, 0.3);
            }
         }
      }

      label {
         text-align: left;
         display: block;
         margin-bottom: 0.5rem;
      }

      textarea {
         resize: vertical;
         min-height: 100px;
         width: 100%;
         padding: 0.9rem;
         border-radius: var(--radius);
         border: none;
         outline: none;
         font-size: 1rem;
         margin-bottom: 1rem;

         &:focus {
            border: 1px solid var(--color-dark);
            box-shadow: 0 0 6px rgba(255, 255, 255, 0.3);
         }
      }

      button#submit {
         background: linear-gradient(135deg, #444, #111);
         width: 100%;
         font-size: 1.1rem;
         cursor: pointer;
         font-weight: bold;
         color: var(--color-light);
         padding: 0.9rem;
         border-radius: var(--radius);
         border: none;
         outline: none;
         transition: all 0.3s ease;


         &:focus {
            transform: scaleY(1.1);
            background: linear-gradient(135deg, #666, #222);

         }

      }

      #status {
         margin-top: 1rem;
         font-size: 0.95rem;
         text-align: center;
         opacity: 0;
         transition: opacity 0.5s ease;
      }

      #status:not(:empty) {
         opacity: 1;
      }
   }
}

/* On page load */
section.contact.reveal {
   opacity: 1;
   transform: translateY(0);
}

/* Footer */
footer {
   background: black;
   color: var(--color-light);
   text-align: center;
   padding: 1rem;
   font-size: 0.9rem;
   justify-content: space-between;
   margin-left: 265.2px;

   a {
      color: var(--color-light);
      font-size: 1rem;
   }
}

/* animation */

@keyframes fadeSlideIn {
   to {
      opacity: 1;
      transform: translateX(0);
   }
}