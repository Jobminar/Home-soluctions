import Header from "../Header/header"
import './home.css'
import enquiry from '../../assets/images/enquire-further-now.png'
import enquire from '../../assets/images/enquire.png'
import profile from '../../assets/images/profile.png'
import enquirefurthernow from '../../assets/images/Frame 18.png'
import add from '../../assets/images/Group 5+.png'
import option1 from '../../assets/images/option1.png'
import option2 from '../../assets/images/option2.png'

const Home=(()=>{
    return(
        <>
              <div className="home-con">
                  <Header/>
                  {/* who-choose-you */}
                  <div className="who-choose-you">
                       <h2>HOME SOLUTIONS</h2>
                       <h1>WHO ARE WE</h1>
                       <div className="content-who">
                           <p>Home Solutions London Inc is a premier real estate services company specializing in sales, letting, and property management With a commitment to excellence, we offer comprehensive solutions for homeowners, tenants, and property investors. Our experienced team leverages industry expertise to facilitate seamless transactions, ensuring satisfaction for all stakeholders. <br/><br/>

                            Whether buying, selling, or managing properties, Home Solutions London Ind is dedicated to providing top-notch, client-focused services that make real estate experiences efficient and rewarding.</p>
                       </div>
                  </div>
                  <div className="enquiry-further">
                      <img  src={enquiry} alt=""/>
                  </div>
                  <div className="why-choose-us">
                     <h1>WHY CHOOSE US</h1>
                     <h2>Guaranteed Rent ‘N’ Tenants</h2>
                     <hr/>
                     <p className="content-wcu">With home solutions, every investment guarantees a stable income and a secured rental return over a 36-month period. The contractual framework provides not just one, but four layers of financial assurance:</p>
                     <ol className="list-wcu">
                      <li>ACCA Managed Payments</li>
                      <li>Year Secured Lease</li>
                      <li>Supported by an Assisted Living Provider Contract</li>
                      <li>Supported by a Government Funded Program</li>   
                     </ol> 
                     <p className="content-wcu">Furthermore, in the event of a change in government leadership, JV Agreement stipulates that the ACCA Accountants will step in to manage all contracts and uphold investor payments.</p>                
                    
                 
                  </div>
                  {/* noeffort */}
                  <div className="noeffort">
                    <h2>No effort Investment</h2>
                    <hr className="black-hr"/>
                    <div className="noeffort-content">
                        <p>In contrast to a typical rental arrangement, the responsibility of overseeing tenants and property maintenance is completely lifted off your shoulders in home solutions.</p>
                        <p>All these tasks are taken care of independently. You won't find yourself addressing noise complaints or receiving early morning calls due to a malfunctioning boiler.</p>
                        <p> After making an investment, your sole task is to enjoy a consistent monthly income with peace of mind, knowing that you're actively contributing to providing deserving families with the shelter they need.</p>
                    </div>
                  </div>

                   {/* Huge yeilds */}
                  <div className="huge-yeilds">
                     <h2>Huge Yields</h2>
                     <hr/>
                     <p className="content-huge">When it comes to home solutions, traditional renting leaves you reliant on mere "hope" to attain the anticipated returns on your investment. Various uncertainties, such as tenant vacancies, rent defaults, or property problems, can arise.</p>
                     <p className="content-huge">In contrast, when engaging in assisted living contracts, you won't encounter any of these concerns. Explore the assured yields offered over the three-year contracts:</p>                
                    
                 
                  </div>
                 
                  {/* easily scalable */}
                  <div className="easyscalable">
                    <h2>Easily Scalable</h2>
                    <hr className="black-hr"/>
                    <div className="easyscalable-content">
                        <p>Due to the assurance of consistent rental income and the hands-free, entirely passive nature of these investments, creating a portfolio of multiple assisted living properties becomes remarkably simple. With each property generating income for a three-year period, you can leverage this opportunity in two ways:</p>
                        <ol className="easyscalable">
                            <li>A straightforward and obvious initiation into a prosperous property career.</li>
                            <li>An additional effortless avenue in your investment portfolio, requiring no extra effort on your part.</li>
                        </ol>
                        <p>Given the ongoing demand for assisted living properties, the availability of such opportunities is highly probable. As long as properties remain accessible and you have the necessary funds, the potential options are boundless.</p>
                    </div>
                  </div>

                  {/* features */}
                  <div className="features">
                      <div className="features-list">
                            <div className="features-sub-list">
                                Rent Garunteed
                            </div>
                            <div className="features-sub-list">
                               Secured Contracts
                            </div>
                            <div className="features-sub-list">
                            Full Tenants Referencing 
                            </div>
                            <div className="features-sub-list">
                            Regular Quarterly Inspections
                            </div>
                            <div className="features-sub-list">
                            Free Market Valuation
                            </div>
                            <div className="features-sub-list">
                            No Hidden Charges
                            </div>
                            <div className="features-sub-list">
                            Tenant Damage Cover
                            </div>
                            <div className="features-sub-list">
                            Property License Applications
                            </div>
                            <div className="features-sub-list">
                            Advice on Buy-to-Let
                            </div>
                            <div className="features-sub-list">
                            Mortgage/Financial Advice
                            </div>
                            <div className="features-sub-list">
                            No Rent Arrears
                            </div>
                            <div className="features-sub-list">
                            Hands-Off Investment
                            </div>
                      </div>
                      <hr className="vertical-line"/>
                      <div className="features-content">
                          <p>ASSISTED LIVING INVESTMENT PROGRAM OFFERS A 100% SECURE AND PROFITABLE INVESTMENT OPPORTUNITY</p>
                      </div>
                  </div>

                  {/* options */}
                  <div className="options" >
                     <div className="option1">
                         <img src={option1} alt="option1"/>
                          <p>An investment of £16,000 with a 20% annual return results in 36 monthly payments of £577, leading to a total return of £20,800.</p>
                     </div>
                     <div className="option2">
                         <img src={option2} alt="option2"/>
                           <p>A £21,500 investment with 20% return entails 36 monthly payments of £955, resulting in a total return of £34,400.</p>
                     </div>
                  </div>

                  {/* home */}
                  
                       <div className="enquire">
                       <img src={enquire} alt="enquire" />
                       </div>
                        <div className="home">
                            <div className="home-sub">
                                <h1>Buy a home</h1>
                                <p>Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                            </div>
                            <div className="home-sub">
                                <h1>Sell a home</h1>
                                <p>No matter what path you take to sell your home, we can help you navigate a successful sale.</p>
                            </div>
                            <div className="home-sub">
                                    <h1>Rent a home</h1>
                                    <p>We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.</p>
                            </div>
                        </div>

                  {/* What people say */}

                    <div className="whatpeoplesay">
                        <div className="whatpeoplesay-head">
                        <hr className="vertical-line"/>
                           <h1>
                           What People Say About <br/>Working With Us
                           </h1>
                        </div>
                        <div className="reviews">
                             <div className="reviews-sub">
                                  <div className="reviews-sub-head">
                                      <img src={profile} alt="profile" className="profileimg"/>     
                                      <h1>Dear Car</h1>  
                                                                  
                                  </div>
                                  <p>I have been working with UPG for just over 6 months now and I must say the experience is first class! The communication from the team is brilliant, each stage of the process runs seamlesly and they are indeed unique at what they deliver. </p>  
                             </div>
                             <div className="reviews-sub">
                                  <div className="reviews-sub-head">
                                      <img src={profile} alt="profile" className="profileimg"/>     
                                      <h1>Dear Car</h1>  
                                                                  
                                  </div>
                                  <p>I have been working with UPG for just over 6 months now and I must say the experience is first class! The communication from the team is brilliant, each stage of the process runs seamlesly and they are indeed unique at what they deliver. </p>  
                             </div>
                             <div className="reviews-sub">
                                  <div className="reviews-sub-head">
                                      <img src={profile} alt="profile" className="profileimg"/>     
                                      <h1>Dear Car</h1>  
                                                                  
                                  </div>
                                  <p>I have been working with UPG for just over 6 months now and I must say the experience is first class! The communication from the team is brilliant, each stage of the process runs seamlesly and they are indeed unique at what they deliver. </p>  
                             </div>
                        </div>
                          
                    </div>

                    {/* What happens next */}
                    <div className="whathappensnext">
                         <h1>What Happens Next?</h1>
                         <p>Upon clicking the "Inquire Further Now" button, you will be prompted to complete a brief form containing your particulars.

                                This will enable one of our team members to directly reach out to you for a comprehensive discussion on the home solutions opportunity and assess your suitability.<br/>

                                This chance is accessible to individuals with the financial means to seize it.

                                Whether you are a novice investor or possess an established property portfolio seeking ethical expansion that contributes uniquely
                                to society, this opportunity is for you.
                                </p>
                                <div className="enquiry-further">
                                    <img  src={enquiry} alt=""/>
                                </div>
                            <h2 className="note">
                            Please note: This opportunity is time sensitive.<br/>
                            Specific contract details must be filled out promptly.<br/>
                            To safeguard your own future and contribute to the well-being of those less fortunate, press the button now to initiate the process.

                            </h2>
                         
                    </div>

                    {/* FAQ */}
                    <div className="faq">
                        <div className="faq-section">
                             <div className="faq-sub-section">
                                <p>How is my money secured?</p>
                                <img src={add} alt="add"/>
                             </div>
                             <div className="faq-sub-section">
                                <p>What happens if any parties pull out of the contract?</p>
                                <img src={add} alt="add"/>
                             </div>
                             <div className="faq-sub-section">
                                <p>What happens if any parties pull out of the contract?</p>
                                <img src={add} alt="add"/>
                             </div>
                             <div className="faq-sub-section">
                                <p>How is my money secured?</p>
                                <img src={add} alt="add"/>
                             </div>
                             <div className="faq-sub-section">
                                <p>What happens if any parties pull out of the contract?</p>
                                <img src={add} alt="add"/>
                             </div>
                             <div className="faq-sub-section">
                                <p>How is my money secured?</p>
                                <img src={add} alt="add"/>
                             </div>
                            
                        </div>
                    </div>

                    {/* footer */}

                    <div className="footer">
                        <p>Copyright © 2023 Home Solutions – All Rights Reserved.</p>
                    </div>
                  
                  
                  
              </div>
        </>
    )
})
export default Home