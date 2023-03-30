import React from 'react'
import { Link } from 'react-router-dom'

import Header from './header'
import Label from './label'
import MemberDetails from './member-details'
import ServiceCard from './service-card'
import SecondaryButton from './secondary-button'
import Footer from './footer'
import projectStyles from '.style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['hero']}>
        <div className={styles['bg']}></div>
        <Header></Header>
        <div className={styles['container01']}>
          <div className={styles['container02']}>
            <h1 className={styles['text']}>YRNBEAUTERPORTFOLIOSITE</h1>
            <span className={styles['text01']}>
              <span></span>
              <span>
                This is a simple example of a Landing Page you can build using
                Notus PRO React. It features multiple CSS components based on
                the Tailwind CSS design system.
              </span>
            </span>
          </div>
          <img
            alt="image"
            src="/playground_assets/gray-vector.svg"
            className={styles['image']}
          />
          <img
            alt="image"
            src="/playground_assets/white-vector.svg"
            className={styles['image1']}
          />
        </div>
      </div>
      <div className={styles['section1']}>
        <div className={styles['container03']}>
          <div className={styles['container04']}>
            <h6 className={styles['text04']}>
              <span>WITH BURNED SOLES</span>
              <span></span>
            </h6>
            <h3 className={` ${styles['text07']} ${projectStyles['healine']} `}>
              I&apos;ve risen with the soles burned
            </h3>
            <span
              className={` ${styles['text08']} ${projectStyles['text-xl']} `}
            >
              <span className={styles['text09']}>
                I&apos;ve fought hard to get out of the hole I was in. I&apos;ve
                dusted myself, and exactly like a dancer, I have danced with the
                fear, you should have filmed me.
              </span>
            </span>
          </div>
          <div className={styles['cards-container']}>
            <div className={styles['card1']}>
              <div className={styles['container05']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                  <path d="M639.403 658.091l32 241.152-137.429-82.475c-13.269-7.851-29.995-8.363-43.904 0l-137.429 82.475 32.043-241.109c39.296 15.829 82.304 24.533 127.317 24.533s88.021-8.747 127.403-24.576zM654.165 554.283c-2.475 1.28-4.821 2.773-6.955 4.48-39.253 24.448-85.547 38.571-135.211 38.571-70.699 0-134.656-28.587-181.035-74.965s-74.965-110.336-74.965-181.035 28.587-134.656 74.965-181.035 110.336-74.965 181.035-74.965 134.656 28.587 181.035 74.965 74.965 110.336 74.965 181.035-28.587 134.656-74.965 181.035c-11.861 11.861-24.875 22.571-38.869 31.915zM304.64 612.48l-48.256 363.221c-3.115 23.339 13.312 44.8 36.693 47.915 9.984 1.323 19.669-0.939 27.563-5.717l191.36-114.816 191.403 114.816c20.224 12.117 46.421 5.589 58.539-14.635 5.205-8.661 6.955-18.389 5.717-27.563l-48.213-363.307c11.947-9.173 23.296-19.115 33.92-29.739 61.696-61.696 99.968-147.072 99.968-241.323s-38.272-179.627-99.968-241.365-147.115-99.968-241.365-99.968-179.627 38.272-241.365 99.968-99.968 147.115-99.968 241.365 38.272 179.627 99.968 241.365c10.667 10.667 22.016 20.608 33.963 29.781z"></path>
                </svg>
              </div>
              <h6
                className={` ${styles['text10']} ${projectStyles['text-xl']} `}
              >
                Awarded Agency
              </h6>
              <span className={styles['text11']}>
                Divide details about your product or agency work into parts. A
                paragraph describing a feature will be enough.
              </span>
            </div>
            <div className={styles['card2']}>
              <div className={styles['container06']}>
                <svg
                  viewBox="0 0 1097.142857142857 1024"
                  className={styles['icon02']}
                >
                  <path d="M731.429 859.429c0 9.714-8.571 18.286-18.286 18.286h-548.571c-21.143 0-18.286-22.286-18.286-36.571v-329.143h-109.714c-20 0-36.571-16.571-36.571-36.571 0-8.571 2.857-17.143 8.571-23.429l182.857-219.429c6.857-8 17.143-12.571 28-12.571s21.143 4.571 28 12.571l182.857 219.429c5.714 6.286 8.571 14.857 8.571 23.429 0 20-16.571 36.571-36.571 36.571h-109.714v219.429h329.143c5.143 0 10.857 2.286 14.286 6.286l91.429 109.714c2.286 3.429 4 8 4 12zM1097.143 621.714c0 8.571-2.857 17.143-8.571 23.429l-182.857 219.429c-6.857 8-17.143 13.143-28 13.143s-21.143-5.143-28-13.143l-182.857-219.429c-5.714-6.286-8.571-14.857-8.571-23.429 0-20 16.571-36.571 36.571-36.571h109.714v-219.429h-329.143c-5.143 0-10.857-2.286-14.286-6.857l-91.429-109.714c-2.286-2.857-4-7.429-4-11.429 0-9.714 8.571-18.286 18.286-18.286h548.571c21.143 0 18.286 22.286 18.286 36.571v329.143h109.714c20 0 36.571 16.571 36.571 36.571z"></path>
                </svg>
              </div>
              <h6
                className={` ${styles['text12']} ${projectStyles['text-xl']} `}
              >
                Free Revisions
              </h6>
              <span className={styles['text13']}>
                Keep you user engaged by providing meaningful information.
                Remember that by this time, the user is curious.
              </span>
            </div>
            <div className={styles['card3']}>
              <div className={styles['container07']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon04']}>
                  <path d="M636 938h-6q-92-24-158-90-38-38-65-103t-27-119q0-52 38-89t92-37 93 37 39 89q0 34 25 58t63 24 64-24 26-58q0-120-91-206t-219-86q-92 0-168 47t-114 125q-24 50-24 120 0 80 28 154 6 20-14 26t-26-12q-32-82-32-168 0-78 30-138 42-90 129-144t191-54q146 0 249 99t103 237q0 52-39 88t-93 36-92-36-38-88q0-34-26-59t-64-25-63 25-25 59q0 112 80 192 56 56 140 78 18 2 14 26-4 16-20 16zM530 626q0 74 55 128t137 54q4 0 18-2t23-2 18 3 11 13q4 22-18 26-24 4-52 4-80 0-132-38-102-70-102-186 0-22 22-22 20 0 20 22zM416 930q-8 0-14-6-54-54-86-114-46-80-46-184 0-94 71-162t171-68 171 68 71 162q0 20-22 20t-22-20q0-78-58-133t-140-55-140 55-58 133q0 96 38 164 26 46 80 104 16 14 0 30-6 6-16 6zM150 414q-22 0-22-20 0-4 4-12 64-92 160-140 100-52 220-52t220 52q98 48 160 138 4 8 4 12 0 14-16 20t-24-8q-60-82-144-124-92-46-200-47t-200 47q-90 46-146 126-6 8-16 8zM760 190q-8 0-10-2-118-60-238-60-130 0-238 60-10 6-20 0t-10-18q0-14 10-20 116-64 258-64 130 0 258 64 18 10 8 28-8 12-18 12z"></path>
                </svg>
              </div>
              <h6
                className={` ${styles['text14']} ${projectStyles['text-xl']} `}
              >
                Verified Company
              </h6>
              <span className={styles['text15']}>
                Write a few lines about each one. A paragraph describing a
                feature will be enough. Keep you user engaged!
              </span>
            </div>
          </div>
          <div className={styles['work-with-us']}>
            <div className={styles['container08']}>
              <div className={styles['container09']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon06']}>
                  <path d="M384 554q64 0 140 18t139 60 63 94v128h-684v-128q0-52 63-94t139-60 140-18zM640 512q-26 0-56-10 56-66 56-160 0-38-16-86t-40-76q30-10 56-10 70 0 120 51t50 121-50 120-120 50zM214 342q0-70 50-121t120-51 120 51 50 121-50 120-120 50-120-50-50-120zM712 560q106 16 188 59t82 107v128h-172v-128q0-98-98-166z"></path>
                </svg>
              </div>
              <h3
                className={` ${styles['text16']} ${projectStyles['healine']} `}
              >
                Work with us is a pleasure
              </h3>
              <span className={styles['text17']}>
                <span className={styles['text18']}>
                  Don&apos;t let your users guess by attaching tooltips and
                  popoves to any element. Just make sure you enable them first
                  via JavaScript.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span className={styles['text21']}>
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and
                  you&apos;re good to go. Just make sure you enable them first
                  via JavaScript.
                </span>
                <br></br>
              </span>
              <span className={styles['text22']}>Check Notus PRO React!</span>
            </div>
            <div className={styles['container10']}>
              <div className={styles['container11']}>
                <img
                  alt="image"
                  src="/playground_assets/blue_wave.svg"
                  className={styles['image2']}
                />
              </div>
              <div className={styles['container12']}>
                <h4
                  className={` ${styles['text23']} ${projectStyles['healine']} `}
                >
                  <span className={styles['text24']}>Top Notch Services</span>
                  <br></br>
                </h4>
                <span className={styles['text25']}>
                  <span>
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/white-vector.svg"
          className={styles['image3']}
        />
      </div>
      <div className={styles['section2']}>
        <div className={styles['container13']}>
          <Label text="WITH BURNED SOLES​"></Label>
          <h2 className={` ${styles['text27']} ${projectStyles['text2xl']} `}>
            <span className={styles['text28']}>
              You need to fight like David with Goliath
            </span>
            <br></br>
          </h2>
          <span className={` ${styles['text29']} ${projectStyles['text-xl']} `}>
            Brother, life in est is not like in the west. Over the night, the
            black clouds appear, but at least I have my poetry for my freedom.
            The victory is for those that rise after they fall.
          </span>
        </div>
        <div className={styles['growing-company-section']}>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
            className={styles['image4']}
          />
          <div className={styles['container14']}>
            <div className={styles['container15']}>
              <svg
                viewBox="0 0 967.4605714285714 1024"
                className={styles['icon08']}
              >
                <path d="M822.857 256c0-30.286-24.571-54.857-54.857-54.857s-54.857 24.571-54.857 54.857 24.571 54.857 54.857 54.857 54.857-24.571 54.857-54.857zM950.857 91.429c0 189.714-52.571 316-188 452-33.143 32.571-70.857 66.286-111.429 100.571l-11.429 216.571c-0.571 5.714-4 11.429-9.143 14.857l-219.429 128c-2.857 1.714-5.714 2.286-9.143 2.286-4.571 0-9.143-1.714-13.143-5.143l-36.571-36.571c-4.571-5.143-6.286-12-4.571-18.286l48.571-157.714-160.571-160.571-157.714 48.571c-1.714 0.571-3.429 0.571-5.143 0.571-4.571 0-9.714-1.714-13.143-5.143l-36.571-36.571c-5.714-6.286-6.857-15.429-2.857-22.286l128-219.429c3.429-5.143 9.143-8.571 14.857-9.143l216.571-11.429c34.286-40.571 68-78.286 100.571-111.429 142.857-142.286 252-188 450.857-188 10.286 0 19.429 8 19.429 18.286z"></path>
              </svg>
            </div>
            <h3 className={` ${styles['text30']} ${projectStyles['healine']} `}>
              A growing company
            </h3>
            <span className={styles['text31']}>
              The extension comes with three pre-build pages to help you get
              started faster. You can change the text and images and you&apos;re
              good to go.
            </span>
            <div className={styles['container16']}>
              <div className={styles['container17']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon10']}>
                  <path d="M636 938h-6q-92-24-158-90-38-38-65-103t-27-119q0-52 38-89t92-37 93 37 39 89q0 34 25 58t63 24 64-24 26-58q0-120-91-206t-219-86q-92 0-168 47t-114 125q-24 50-24 120 0 80 28 154 6 20-14 26t-26-12q-32-82-32-168 0-78 30-138 42-90 129-144t191-54q146 0 249 99t103 237q0 52-39 88t-93 36-92-36-38-88q0-34-26-59t-64-25-63 25-25 59q0 112 80 192 56 56 140 78 18 2 14 26-4 16-20 16zM530 626q0 74 55 128t137 54q4 0 18-2t23-2 18 3 11 13q4 22-18 26-24 4-52 4-80 0-132-38-102-70-102-186 0-22 22-22 20 0 20 22zM416 930q-8 0-14-6-54-54-86-114-46-80-46-184 0-94 71-162t171-68 171 68 71 162q0 20-22 20t-22-20q0-78-58-133t-140-55-140 55-58 133q0 96 38 164 26 46 80 104 16 14 0 30-6 6-16 6zM150 414q-22 0-22-20 0-4 4-12 64-92 160-140 100-52 220-52t220 52q98 48 160 138 4 8 4 12 0 14-16 20t-24-8q-60-82-144-124-92-46-200-47t-200 47q-90 46-146 126-6 8-16 8zM760 190q-8 0-10-2-118-60-238-60-130 0-238 60-10 6-20 0t-10-18q0-14 10-20 116-64 258-64 130 0 258 64 18 10 8 28-8 12-18 12z"></path>
                </svg>
              </div>
              <span className={styles['text32']}>
                Carefully crafted components
              </span>
            </div>
            <div className={styles['container18']}>
              <div className={styles['container19']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon12']}>
                  <path d="M917.806 357.076c-22.21-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-368c-44.114 0-80 35.888-80 80v736c0 44.112 35.886 80 80 80h608c44.112 0 80-35.888 80-80v-496c0-14.332-4.372-39.35-42.194-90.924zM785.374 302.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.982 17.78 50.678 41.878 81.374 72.572v0zM896 944c0 8.672-7.328 16-16 16h-608c-8.672 0-16-7.328-16-16v-736c0-8.672 7.328-16 16-16 0 0 367.956-0.002 368 0v224c0 17.672 14.324 32 32 32h224v496z"></path>
                  <path d="M602.924 42.196c-51.574-37.822-76.592-42.196-90.924-42.196h-368c-44.112 0-80 35.888-80 80v736c0 38.632 27.528 70.958 64 78.39v-814.39c0-8.672 7.328-16 16-16h486.876c-9.646-7.92-19.028-15.26-27.952-21.804z"></path>
                </svg>
              </div>
              <span className={styles['text33']}>Amazing page examples</span>
            </div>
            <div className={styles['container20']}>
              <div className={styles['container21']}>
                <svg
                  viewBox="0 0 1024.5851428571427 1024"
                  className={styles['icon15']}
                >
                  <path d="M1008 6.286c12 8.571 17.714 22.286 15.429 36.571l-146.286 877.714c-1.714 10.857-8.571 20-18.286 25.714-5.143 2.857-11.429 4.571-17.714 4.571-4.571 0-9.143-1.143-13.714-2.857l-301.143-122.857-170.286 186.857c-6.857 8-16.571 12-26.857 12-4.571 0-9.143-0.571-13.143-2.286-14.286-5.714-23.429-19.429-23.429-34.286v-258.286l-269.714-110.286c-13.143-5.143-21.714-17.143-22.857-31.429-1.143-13.714 6.286-26.857 18.286-33.714l950.857-548.571c12-7.429 27.429-6.857 38.857 1.143zM812.571 862.857l126.286-756-819.429 472.571 192 78.286 493.143-365.143-273.143 455.429z"></path>
                </svg>
              </div>
              <span className={styles['text34']}>Dynamic components</span>
            </div>
          </div>
        </div>
        <div className={styles['container22']}>
          <h6 className={styles['text35']}>
            <span>THE ENTOURAGE</span>
          </h6>
          <h3 className={` ${styles['text37']} ${projectStyles['healine']} `}>
            It is everything, and it won&apos;t change
          </h3>
          <span className={` ${styles['text38']} ${projectStyles['text-xl']} `}>
            <span className={styles['text39']}>
              It depends on your friends and companions, it depends on who goes
              out with you, if they have money, if you have money.
            </span>
          </span>
        </div>
        <div className={styles['team']}>
          <div className={styles['container23']}>
            <Link to="/profile" className={styles['navlink']}>
              <div className={styles['container24']}>
                <MemberDetails image_src="/playground_assets/team1-200h.jpg"></MemberDetails>
                <div className={styles['container25']}>
                  <div className={styles['container26']}>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className={styles['icon17']}
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                  <div className={styles['container27']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon19']}>
                      <path d="M783.104 239.957c-74.667-74.283-165.888-111.957-271.104-111.957-106.197 0-197.675 37.717-271.915 112-74.368 74.283-112.085 165.845-112.085 272 0 105.173 37.675 196.395 111.957 271.104 74.283 74.923 165.803 112.896 272.043 112.896 105.259 0 196.48-37.973 271.189-112.768 74.88-74.795 112.811-166.059 112.811-271.232 0-106.155-37.973-197.717-112.896-272.043zM722.859 722.901c-48.512 48.597-103.936 76.288-168.192 84.693v-210.261h85.333v-85.333h-85.333v-59.733c0-14.123 11.477-25.6 25.643-25.6h59.691v-85.333h-59.605c-31.659 0-58.069 11.648-79.232 35.072-21.163 23.339-31.829 51.84-31.829 85.675v49.92h-85.333v85.333h85.333v210.347c-64.939-8.32-120.576-36.053-168.832-84.651-58.667-59.051-87.168-128.085-87.168-211.029 0-83.883 28.459-153.088 87.125-211.627 58.453-58.581 127.659-87.040 211.541-87.040 82.987 0 151.979 28.501 210.987 87.168 59.008 58.539 87.68 127.744 87.68 211.499 0 82.816-28.715 151.851-87.808 210.901z"></path>
                    </svg>
                  </div>
                  <div className={styles['container28']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon21']}>
                      <path d="M382 554h88v382q-62-6-139-43t-123-83q62-34 113-110t61-146zM730 554h206q-10 100-66 188-50-24-90-79t-50-109zM154 742q-58-90-66-188h206q-10 54-50 109t-90 79zM642 554q10 70 61 146t113 110q-44 46-121 83t-141 43v-382h88zM382 470q-10-70-61-146t-113-110q44-46 121-83t141-43v382h-88zM642 470h-88v-382q62 6 139 43t123 83q-62 34-113 110t-61 146zM294 470h-206q10-100 66-188 50 24 90 79t50 109zM730 470q10-54 50-109t90-79q56 88 66 188h-206z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/profile" className={styles['navlink1']}>
              <div className={styles['container29']}>
                <MemberDetails
                  heading1="Romina Hadid"
                  heading11="Marketing Specialist"
                  image_src="/playground_assets/team21-200h.jpg"
                ></MemberDetails>
                <div className={styles['container30']}>
                  <div className={styles['container31']}>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className={styles['icon23']}
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                  <div className={styles['container32']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon25']}>
                      <path d="M783.104 239.957c-74.667-74.283-165.888-111.957-271.104-111.957-106.197 0-197.675 37.717-271.915 112-74.368 74.283-112.085 165.845-112.085 272 0 105.173 37.675 196.395 111.957 271.104 74.283 74.923 165.803 112.896 272.043 112.896 105.259 0 196.48-37.973 271.189-112.768 74.88-74.795 112.811-166.059 112.811-271.232 0-106.155-37.973-197.717-112.896-272.043zM722.859 722.901c-48.512 48.597-103.936 76.288-168.192 84.693v-210.261h85.333v-85.333h-85.333v-59.733c0-14.123 11.477-25.6 25.643-25.6h59.691v-85.333h-59.605c-31.659 0-58.069 11.648-79.232 35.072-21.163 23.339-31.829 51.84-31.829 85.675v49.92h-85.333v85.333h85.333v210.347c-64.939-8.32-120.576-36.053-168.832-84.651-58.667-59.051-87.168-128.085-87.168-211.029 0-83.883 28.459-153.088 87.125-211.627 58.453-58.581 127.659-87.040 211.541-87.040 82.987 0 151.979 28.501 210.987 87.168 59.008 58.539 87.68 127.744 87.68 211.499 0 82.816-28.715 151.851-87.808 210.901z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/profile" className={styles['navlink2']}>
              <div className={styles['container33']}>
                <MemberDetails
                  heading1="Alexa Smith"
                  heading11="UI/UX Designer"
                  image_src="/playground_assets/team6-200h.jpg"
                ></MemberDetails>
                <div className={styles['container34']}>
                  <div className={styles['container35']}>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className={styles['icon27']}
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                  <div className={styles['container36']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon29']}>
                      <path d="M783.104 239.957c-74.667-74.283-165.888-111.957-271.104-111.957-106.197 0-197.675 37.717-271.915 112-74.368 74.283-112.085 165.845-112.085 272 0 105.173 37.675 196.395 111.957 271.104 74.283 74.923 165.803 112.896 272.043 112.896 105.259 0 196.48-37.973 271.189-112.768 74.88-74.795 112.811-166.059 112.811-271.232 0-106.155-37.973-197.717-112.896-272.043zM722.859 722.901c-48.512 48.597-103.936 76.288-168.192 84.693v-210.261h85.333v-85.333h-85.333v-59.733c0-14.123 11.477-25.6 25.643-25.6h59.691v-85.333h-59.605c-31.659 0-58.069 11.648-79.232 35.072-21.163 23.339-31.829 51.84-31.829 85.675v49.92h-85.333v85.333h85.333v210.347c-64.939-8.32-120.576-36.053-168.832-84.651-58.667-59.051-87.168-128.085-87.168-211.029 0-83.883 28.459-153.088 87.125-211.627 58.453-58.581 127.659-87.040 211.541-87.040 82.987 0 151.979 28.501 210.987 87.168 59.008 58.539 87.68 127.744 87.68 211.499 0 82.816-28.715 151.851-87.808 210.901z"></path>
                    </svg>
                  </div>
                  <div className={styles['container37']}>
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className={styles['icon31']}
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/profile" className={styles['navlink3']}>
              <div className={styles['container38']}>
                <MemberDetails
                  heading1="Jenna Kardi"
                  heading11="Founder and ceo"
                  image_src="/playground_assets/team41-200h.png"
                ></MemberDetails>
                <div className={styles['container39']}>
                  <div className={styles['container40']}>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className={styles['icon33']}
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                  <div className={styles['container41']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon35']}>
                      <path d="M783.104 239.957c-74.667-74.283-165.888-111.957-271.104-111.957-106.197 0-197.675 37.717-271.915 112-74.368 74.283-112.085 165.845-112.085 272 0 105.173 37.675 196.395 111.957 271.104 74.283 74.923 165.803 112.896 272.043 112.896 105.259 0 196.48-37.973 271.189-112.768 74.88-74.795 112.811-166.059 112.811-271.232 0-106.155-37.973-197.717-112.896-272.043zM722.859 722.901c-48.512 48.597-103.936 76.288-168.192 84.693v-210.261h85.333v-85.333h-85.333v-59.733c0-14.123 11.477-25.6 25.643-25.6h59.691v-85.333h-59.605c-31.659 0-58.069 11.648-79.232 35.072-21.163 23.339-31.829 51.84-31.829 85.675v49.92h-85.333v85.333h85.333v210.347c-64.939-8.32-120.576-36.053-168.832-84.651-58.667-59.051-87.168-128.085-87.168-211.029 0-83.883 28.459-153.088 87.125-211.627 58.453-58.581 127.659-87.040 211.541-87.040 82.987 0 151.979 28.501 210.987 87.168 59.008 58.539 87.68 127.744 87.68 211.499 0 82.816-28.715 151.851-87.808 210.901z"></path>
                    </svg>
                  </div>
                  <div className={styles['container42']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon37']}>
                      <path d="M382 554h88v382q-62-6-139-43t-123-83q62-34 113-110t61-146zM730 554h206q-10 100-66 188-50-24-90-79t-50-109zM154 742q-58-90-66-188h206q-10 54-50 109t-90 79zM642 554q10 70 61 146t113 110q-44 46-121 83t-141 43v-382h88zM382 470q-10-70-61-146t-113-110q44-46 121-83t141-43v382h-88zM642 470h-88v-382q62 6 139 43t123 83q-62 34-113 110t-61 146zM294 470h-206q10-100 66-188 50 24 90 79t50 109zM730 470q10-54 50-109t90-79q56 88 66 188h-206z"></path>
                    </svg>
                  </div>
                  <div className={styles['container43']}>
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className={styles['icon39']}
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles['section3']}>
        <div className={styles['container44']}>
          <h6 className={` ${styles['text40']} ${projectStyles['text-sm']} `}>
            <span>ON THE COASTLINE</span>
          </h6>
          <h3 className={` ${styles['text42']} ${projectStyles['healine']} `}>
            We are missing the summer
          </h3>
          <span className={` ${styles['text43']} ${projectStyles['text-xl']} `}>
            <span className={styles['text44']}>
              We&apos;re waiting for the weather to warm up so that we can go to
              the coastline. We really miss the summertime, our second home the
              coastline.
            </span>
            <br></br>
          </span>
          <div className={styles['services']}>
            <ServiceCard></ServiceCard>
            <div className={styles['container45']}>
              <div className={styles['container46']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon41']}>
                  <path d="M832 192v-128h-640v128h-192v128c0 106.038 85.958 192 192 192 20.076 0 39.43-3.086 57.62-8.802 46.174 66.008 116.608 113.796 198.38 130.396v198.406h-64c-70.694 0-128 57.306-128 128h512c0-70.694-57.306-128-128-128h-64v-198.406c81.772-16.6 152.206-64.386 198.38-130.396 18.19 5.716 37.544 8.802 57.62 8.802 106.042 0 192-85.962 192-192v-128h-192zM192 436c-63.962 0-116-52.038-116-116v-64h116v64c0 40.186 7.43 78.632 20.954 114.068-6.802 1.246-13.798 1.932-20.954 1.932zM948 320c0 63.962-52.038 116-116 116-7.156 0-14.152-0.686-20.954-1.932 13.524-35.436 20.954-73.882 20.954-114.068v-64h116v64z"></path>
                </svg>
              </div>
              <h1
                className={` ${styles['text45']} ${projectStyles['text-xl']} `}
              >
                Grow your market
              </h1>
              <span className={styles['text46']}>
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </span>
            </div>
            <div className={styles['container47']}>
              <div className={styles['container48']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon43']}>
                  <path d="M726 726v-172h-86v172h86zM554 726v-428h-84v428h84zM384 726v-300h-86v300h86zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h596z"></path>
                </svg>
              </div>
              <h1
                className={` ${styles['text47']} ${projectStyles['text-xl']} `}
              >
                Launch time
              </h1>
              <span className={styles['text48']}>
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </span>
            </div>
          </div>
          <div className={styles['contact']}>
            <Label text="MESSAGE US"></Label>
            <h2 className={styles['text49']}>Type in the bellow form</h2>
            <span
              className={` ${styles['text50']} ${projectStyles['text-xl']} `}
            >
              They say there&apos;s no future for the street rascals, nothing
              for them, leave them to fall. But it isn&apos;t always how you
              would like it to be, especially when you do nothing for yourself.
            </span>
            <div className={styles['form']}>
              <h1 className={styles['text51']}>Want to work with us?</h1>
              <span
                className={` ${styles['text52']} ${projectStyles['text-xl']} `}
              >
                Complete this form and we will get back to you in 24 hours.
              </span>
              <span
                className={` ${styles['text53']} ${projectStyles['text-xs']} `}
              >
                FULL NAME
              </span>
              <input
                type="text"
                placeholder="Full Name"
                className={` ${styles['textinput']} ${projectStyles['text-sm']} ${projectStyles['input']} `}
              />
              <span
                className={` ${styles['text54']} ${projectStyles['text-xs']} `}
              >
                EMAIL
              </span>
              <input
                type="text"
                placeholder="Email"
                className={` ${styles['textinput1']} ${projectStyles['text-sm']} ${projectStyles['input']} `}
              />
              <span
                className={` ${styles['text55']} ${projectStyles['text-xs']} `}
              >
                MESSAGE
              </span>
              <textarea
                cols="80"
                rows="4"
                disabled="true"
                placeholder="Type a message"
                className={` ${styles['textarea']} ${projectStyles['text-sm']} ${projectStyles['textarea']} `}
              ></textarea>
              <div className={styles['container49']}>
                <SecondaryButton
                  button="Send message"
                  rootClassName="root-class-name"
                ></SecondaryButton>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/gray-vector.svg"
          className={styles['image5']}
        />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
