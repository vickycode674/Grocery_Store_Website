import styles from './BillingFrame.module.css';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';

const BillingFrame = () => {
    const [theme] = useThemeHook()
  	return (
      <div className={styles.groupParent} style={{ border: `2px solid ${theme ? 'black' : 'white'}`, padding: '10px' }}>
        <div className={styles.phoneParent}>
          <div className={styles.phone}>
            <div className={styles.companyNameOptionalContainer}style={{color:theme?'#ffffff':''}}>Phone</div>
              <input className={styles.inputField} style={{backgroundColor:theme?'#2A2C38':''}}  placeholder='Phone number'/>
          </div>
          <div className={styles.email1}>
            <div className={styles.companyNameOptionalContainer} style={{color:theme?'#ffffff':''}}>Email</div>
              <input className={styles.inputField} style={{backgroundColor:theme?'#2A2C38':''}}  placeholder='Email Address'/>
          </div>
          <div className={styles.states}>
            <div className={styles.companyNameOptionalContainer} style={{color:theme?'#ffffff':''}}>States</div>
            <div className={styles.inputField2} style={{backgroundColor:theme?'#2A2C38':''}} >
              <div className={styles.selects}>
                <label htmlFor="stateSelect" >Select State:</label>
                <select id="stateSelect" className={styles.stateSelect} style={{backgroundColor:theme?'#2A2C38':''}} >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              
            </div>
          </div>

          <div className={styles.countryregion}>
            <div className={styles.companyNameOptionalContainer} style={{color:theme?'#ffffff':''}}>
              Country / Region
            </div>
            <div className={styles.inputField2} style={{backgroundColor:theme?'#2A2C38':''}} >
        <div className={styles.select}>Select</div>
        <select className={styles.stateSelect} style={{backgroundColor:theme?'#2A2C38':''}} >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            {/* Add more options as needed */}
        </select>
        </div>

          </div>
          <div className={styles.streetAddress}>
            <div className={styles.companyNameOptionalContainer} style={{color:theme?'#ffffff':''}}>
              Street Address
            </div>
        
              <input className={styles.inputField4} style={{backgroundColor:theme?'#2A2C38':'',color:theme?'#FF6316':''}} placeholder='Email'/>
           
          </div>
          <div className={styles.companyName}>
            <div className={styles.companyNameOptionalContainer}>
              <span style={{color:theme?'#ffffff':''}}>{`Company Name `}</span>
              <span className={styles.optional} style={{color:theme?'#ffffff':''}}>(optional)</span>
            </div>
              <input className={styles.inputField5}style={{backgroundColor:theme?'#2A2C38':''}} placeholder='Company name'/>
          </div>
          <div className={styles.lastName}>
            <div className={styles.companyNameOptionalContainer} style={{color:theme?'#ffffff':''}}>Last name</div>
              <input className={styles.inputField6} style={{backgroundColor:theme?'#2A2C38':''}}  placeholder='Your last name'/>
          </div>
          <div className={styles.firstName}>
            <div className={styles.companyNameOptionalContainer} style={{color:theme?'#ffffff':''}} >
              First name
            </div>
            
            <input className={styles.inputField5} style={{backgroundColor:theme?'#2A2C38':''}}  placeholder='Your first name'/>
          </div>
          <div className={styles.billingInformation} style={{color:theme?'#ffffff':''}}>Billing Information</div>
          <div className={styles.cashOnDelivery1}>
      
            <div>
              <input
                type="checkbox"
                id="shipToDifferentAddress"
                className={styles.checkbox}
              />
              <label
                htmlFor="shipToDifferentAddress"
                className={styles.companyNameOptionalContaine}
                style={{color:theme?'#ffffff':''}}
              >
                Ship to a different address
              </label>
            </div>
          </div>
        </div>
        <div className={styles.frameChild} />
        <div className={styles.additionalInfo}>
          <div className={styles.additionalInfo1} style={{color:theme?'#ffffff':''}} >Additional Info</div>
          <div className={styles.firstName2}>
            <div className={styles.companyNameOptionalContainer} style={{color:theme?'#ffffff':''}} >
              Order Notes (Optional)
            </div>
            
              <input className={styles.inputField8}  style={{backgroundColor:theme?'#2A2C38':''}}placeholder='
                Notes about your order, e.g. special notes for delivery' />
          </div>
        </div>
      </div>
    );
};

export default BillingFrame;
