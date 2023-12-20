import React from "react";
import "../assets/mayur_portfolio.css"
import { SectionWrapper } from "../hoc";



const Tech = () => {
  
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      <h2 class="text-white font-william font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">Skills</h2>
      <p class="container text-center ont-black md:text-[30px]">My technical & miscellaneous skills</p>
      <div class="skills__container container grid">
      <div class="skills__column">
          <div class="skills__content skills__open">
            <div class="skills__header">
              <i class="uil uil-swatchbook skills__icon"></i>

              <div>
                <h1 class="skills__title">Languages</h1>
                
              </div>

              <i class="uil uil-angle-down skills__arrow"></i>
            </div>

            <div class="skills__list grid">
              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">HTML/CSS</h3>
                  <span class="skills__number">100%</span>
                </div>
                <div class="skills__bar">
                  <span
                    class="skills__percentage skills__perfect"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">JavaScript/TypeScript</h3>
                  <span class="skills__number">100%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__perfect"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Python</h3>
                  <span class="skills__number">95%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__mas"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">PHP</h3>
                  <span class="skills__number">95%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__mas"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Java</h3>
                  <span class="skills__number">85%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__good"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Ruby</h3>
                  <span class="skills__number">85%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__good"></span>
                </div>
              </div>
            </div>
          </div>

          <div class="skills__content skills__open">
            <div class="skills__header">
              <i class="uil uil-analysis skills__icon"></i>

              <div>
                <h1 class="skills__title">Misc</h1>
                
              </div>

              <i class="uil uil-angle-down skills__arrow"></i>
            </div>

            <div class="skills__list grid">
              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">WordPress, Figma, Webflow</h3>
                  <span class="skills__number">90%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__git"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">API integration, RESTful API</h3>
                  <span class="skills__number">90%</span>
                </div>
                <div class="skills__bar">
                  <span
                    class="skills__percentage skills__linux"></span>
                </div>
              </div>
              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Search Engine Opimization</h3>
                  <span class="skills__number">85%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__rs"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Shopify, WooCommerce</h3>
                  <span class="skills__number">75%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__js"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">E-commerce Website</h3>
                  <span class="skills__number">85%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__sd"></span>
                </div>
              </div>


              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">AI Bot</h3>
                  <span class="skills__number">98%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__tm"></span>
                </div>
              </div>

            </div>
          </div>

        </div>
        <div class="skills__column">
          <div class="skills__content skills__open">
            <div class="skills__header">
              <i class="uil uil-cloud-computing skills__icon"></i>

              <div>
                <h1 class="skills__title">Frameworks</h1>
                
              </div>

              <i class="uil uil-angle-down skills__arrow"></i>
            </div>

            <div class="skills__list grid">

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Express.js, Next.js, Nest.js, Node.js</h3>
                  <span class="skills__number">95%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__mas"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">React, Angular</h3>
                  <span class="skills__number">100%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__perfect"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Django, Flask</h3>
                  <span class="skills__number">75%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__sci"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Laravel</h3>
                  <span class="skills__number">95%</span>
                </div>
                <div class="skills__bar">
                  <span
                    class="skills__percentage skills__mas"></span>
                </div>
              </div>
              
              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Spring, Apache Struts</h3>
                  <span class="skills__number">90%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__ks"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Ruby on Rails</h3>
                  <span class="skills__number">90%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__ks"></span>
                </div>
              </div>

            </div>
          </div>

          <div class="skills__content skills__open">
            <div class="skills__header">
              <i class="uil uil-cloud-computing skills__icon"></i>

              <div>
                <h1 class="skills__title">Database</h1>
                
              </div>

              <i class="uil uil-angle-down skills__arrow"></i>
            </div>

            <div class="skills__list grid">

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">MySQL</h3>
                  <span class="skills__number">95%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__mas"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">PostgreSQL</h3>
                  <span class="skills__number">85%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__good"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">MongoDB</h3>
                  <span class="skills__number">75%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__little"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Firebase, Supabase</h3>
                  <span class="skills__number">75%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__little"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">AWS, Azure, Google Cloud</h3>
                  <span class="skills__number">75%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__little"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Oracle</h3>
                  <span class="skills__number">75%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__little"></span>
                </div>
              </div>

              

            </div>
          </div>
        </div>
        

      </div>


    </div>
  );
};

export default SectionWrapper(Tech, "skill");
