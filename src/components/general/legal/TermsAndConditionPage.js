import React from 'react'
import { Row, Col } from 'antd'


const Bolder = {fontWeight:600}
const Bold = {fontWeight:500}

const TermsAndConditionsPage = () => (
  <Row type="flex" justify="center" style={{margin:'30px 0', textAlign:'justify'}}>
    <Col xs={22} sm={22} md={18} lg={12}>
      <p style={Bolder}>ECASHPAY TERMS AND CONDITIONS</p>
      <p>Effective Date: ___________; Updated Date: ______________</p>
      <br/>
      <p style={Bolder}>1. DEFINITION</p>
      <p><span style={Bold}>Ecashpay Asia Inc.</span> – a corporation is registered with the Bangko Sentral ng Pilipinas (BSP) as an E-Money Issuer.</p>
      <p><span style={Bold}>Ecashpay Account Holder</span> – refers to an individual who uses the Ecashpay service (“Service”) and whose name 
        appears on the online form, or signed enrollment form or application form, or the Card, as may be applicable.
        Refers also to the Principal Account Holder.</p>
      <p><span style={Bold}>Ecashpay</span> – is a form of electronic money which allows Ecashpay account holders to conveniently send and receive
        money electronically as well as making purchases over the internet.</p>
      <p><span style={Bold}>Ecashpay Account</span> – is an E-Money instrument that stores Philippine Peso (Php) value in the Ecashpay Asia Inc. system.</p>
      <p><span style={Bold}>Ecashpay Mastercard cash card</span> – refers to the cash card issued under license with Mastercard linked to Ecashpay
        wallet which is a reloadable card used for the payment of goods and services and ATM cash withdrawals and can
        be accepted in all Mastercard accredited merchants worldwide.</p>
      <p><span style={Bold}>In-Store Payments</span> - refers to face-to-face payment by the account holder using the Ecashpay card.</p>
      <p><span style={Bold}>Online Payments</span> – refers to the online payment by an Ecashpay Account Holder to an online Merchant.</p>
      <p><span style={Bold}>Ecashpay Top-up Partner</span> - a top-up or load-up channel or any accredited partner authorized by Ecashpay Asia Inc. 
        to perform the Service.</p>
      <p><span style={Bold}>Ecashpay Accredited Merchant</span> – refers to an accredited establishment to accept Ecashpay and Ecashpay
        Mastercard as payment for the purchase of goods and services.</p>
      <p><span style={Bold}>Ecashpay Web/Mobile App</span> – web portal/mobile application that serves Ecashpay account holder to access his/her account.</p>
      <p><span style={Bold}>POS or Point of Sale Terminal</span> – refers to the device or terminal used by a merchant to accept and process payments.</p>
      <p><span style={Bold}>QR Code</span> – refers to the code which merchant displays to accept QR code payments through an Ecashpay account holder’s mobile application.</p>
      <p><span style={Bold}>KYC (Know your Customer)</span> – it is a process of verifying the identity of the Account holder as required by the Bangko Sentral ng Pilipinas.</p>
      <p><span style={Bold}>User’s Guide</span> – refers to the instructions provided on the use of the Service issued to Account Holders and may be amended by Ecashpay Asia Inc. as necessary.</p>
      <br/>
      <p style={Bolder}>2. ECASHPAY ACCOUNT</p>
      <p>The Ecashpay Account is a reloadable electronic wallet in Philippine Peso value. It is not a depository account, thus, 
        it shall not earn interest and it is not covered by the Philippine Deposit Insurance Corporation (PDIC). It is subject 
        to the rules and regulations of the Bangko Sentral ng Pilipinas (BSP) and the Anti-Money Laundering Act (AMLA). </p>
      <br/>
      <p style={Bolder}>3. ECASHPAY MASTERCARD CASH CARD</p>
      <p>An Account Holder has the option to purchase/upgrade the card and indicate in the application form. An Ecashpay
        Card may be loaded/reloaded through any of the Ecashpay Top-up/loading partner. It may also accept transfer of
        value from another Ecashpay Account. Any Card issued remains the sole property of Ecashpay Asia Inc. and it is not
        transferable and shall be for the direct use of the Account Holder and shall be held under his/her name. Ecashpay
        Card issued to Account Holder cannot be offered for re-sell. Card will be honored by Merchants only when
        properly signed and presented by the Account Holder in good standing, and the Cardholder signs the required
        charge invoice or keys-in the card PIN, if purchase is in person. The card may be suspended, cancel or terminated
        by Ecashpay at any time and for whatever cause. Ecashpay Asia Inc. may suspend, cancel or terminate at any time
        the use of the Service for whatever reason it deems fit. Account Holder agrees to surrender his/her Card upon
        demand to any Ecashpay office and/or branch or to its duly authorized representative. The Account Holder agrees
        to hold Ecashpay Asia Inc. free and harmless from any claim for damages arising from such suspension, termination
        or confiscation. Continued use of the Card despite notice of such shall be considered fraudulent. Ecashpay Asia Inc.
        shall not be liable to any unauthorized use of the Card.</p>
        <br/>
        <p style={Bolder}>4. ECASHPAY WALLET TOP-UP</p>
        <p>An Account Holder can top up/load the Ecashpay Account through accredited Top-Up Partners., and fees as may
          be applicable. The applicable charges and fees shall be automatically deducted from the balance in the account.
          5.3 Ecashpay may impose minimum and/or maximum amounts per load, per account depending on business needs
          and applicable law, rules and regulations</p>
        <br/>
        <p style={Bolder}>5. ECASHPAY WALLET PAYOUT</p>
        <p>Ecashpay Account Holder may payout peso value of his/her Ecashpay wallet to any Ecashpay accredited partner
          outlets or withdraw cash using Ecashpay Mastercard Cash card at any Bancnet or Mastercard Automated Teller
          Machine (ATM) terminals subject to applicable bank charges, if any.</p>
        <br/>
        <p style={Bolder}>6. ECASHPAY WALLET TRANSFER</p>
        <p>An Account Holder may transfer value from his/her Ecashpay Account to another Ecashpay Account and/or other
          accredited partners using the Ecashpay App, Web Portal, or Platform or Channel.</p>
        <br/>
        <p style={Bolder}>7. PAYMENT OF GOODS & SERVICES</p>
        <br/>
        <p style={Bolder}>7.1. USING ECASHPAY ACCOUNT </p>
        <p>The Peso value loaded in the Ecashpay Account may be used to purchase goods and services to:</p>
        <ol type="a">
          <li>In-Store Merchant with POS (Point of Sale) terminal accepts Mastercard cash card - In-Store Payments:
            Account holder signs the required charge invoice or keys-in the card PIN for the Payment for goods and
            services via POS (Point of Sale) terminal </li>
          <li>In-Store Merchant with Ecashpay QR code - Account holder scans QR code of merchant if using QR Code payment</li>
          <li>Online Merchant which accepts Mastercard cash card or “Remote” Purchases - Online Payments:
            Payments for goods and services performed “remote”, such as but not limited to access through the
            Mobile Phone App and Internet, where Account Holder is not physically present in the Merchant’s
            premises when making a purchase, will not require the Account Holder’s signature in the Merchant’s
            transaction slip. Once the payment transaction has been authorized and consummated, Ecashpay Asia Inc.
            shall not be held liable for any undelivered goods and defective product purchased</li>
        </ol>
        <br/>
        <p style={Bolder}>7.2. USING LINKED DEBIT CARD/CREDIT CARD TO ECASHPAY ACCOUNT</p>
        <p>By adding a debit card or credit card as a Payment Method, you are providing Ecashpay with continuous authority
          to automatically charge that card to obtain the relevant funds when the card is used as a Payment Method
          pursuant to this Agreement. You can stop the continuous authority in respect of any card by removing that card as
          a Payment Method in your Account Profile.</p>
        <br/>
        <p style={Bolder}>8. TRANSACTION, CARD LIMIT AND ACCOUNT WALLET</p>
        <p>Transaction and card balance limits may be assigned or changed by Ecashpay Asia Inc., at its option pursuant to
          Ecashpay Account type, applicable laws, subject to (15) days prior notice to the Account Holders.
          Customer can have more than one Ecashpay wallet under his/her name but may only apply for 1 Ecashpay cash card.</p>
        <br/>
        <p style={Bolder}>9. ACTIVATION AND DEACTIVATION OF ECASHPAY SERVICE FEATURES</p>
        <p>Ecashpay Asia Inc. may add or introduce other Service features. Moreover, it may also deactivate Service features
          at its option at any time. Ecashpay Asia Inc. may opt to suspend or terminate an Account Holder’s privilege to use a
          particular feature without prior notice, particularly, but not limited to occasions when there are fraudulent
          transactions or suspicious activity. In such cases, Ecashpay Asia Inc. may charge a fee upon reactivation of the said
          feature, as per request of the Account Holder. The approval of the request shall be the sole discretion of Ecashpay
          Asia Inc</p>
        <br/>
        <p style={Bolder}>10. LOYALTY & REWARDS PROGRAM</p>
        <p>Ecashpay Asia Inc. shall have an option to introduce a Loyalty Program on the use of the Service. The Account
          Holder’s right and obligation in the Loyalty Program shall be covered by the Terms and Conditions specific to the
          Loyalty Program.</p>
        <br/>
        <p style={Bolder}>11. FEES, RATES & OTHER CHARGES</p>
        <p>The Account Holder shall pay card application/replacement fees if applicable. All fees are non-refundable.
          An annual Fee of Php 250.00 shall be charged to Account Holder for cash card. Inactivity fee of P350.00 shall be
          charged for accounts with no financial movements. In the event Account Holder fails to pay the Annual Fee,
          Account will be temporarily suspended. Once Account Holder pays for the Annual Fee, he/she may request for reactivation
          of the suspended account. The Account Holder agrees to pay other fees and charges and applicable
          taxes, related to the Ecashpay service and its use, as may be imposed by Ecashpay Asia Inc., such as, but not
          limited to, ATM withdrawal, top-up and payout fees. </p>
        <br/>
        <p style={Bolder}>12. STATEMENT OF TRANSACTION</p>
        <p>The Account Holder at any time may view his/her statement of transactions by logging-in to the Ecashpay Account.
          The mere act of Ecashpay Asia Inc. in making the Statement of Transactions viewable at any time via Ecashpay App,
          Web Portal, or Platform, or accessed through an accredited Third Party platform or channel is conclusive
          presumption that the Account Holder has received the same. Ecashpay Asia Inc. shall be held free and harmless
          from any and all liability should the Statement of Transactions be read by a person other than the Account Holder.
          Neither may Account Holder thereafter raise the defense that he/she failed to receive the Statement of
          Transactions. In all instances, the Account Holder may inquire about the Statement of Transactions by contacting
          the Service Hotline.
          Statement of Transactions as viewed in the Ecashpay App, Web Portal, or Platform, or accessed through an
          accredited Third Party platform or channel shall be conclusive account of Account Holder’s transaction. </p>
        <br/>
        <p style={Bolder}>13. DISPUTES OF UNAUTHORIZED TRANSACTIONS</p>
        <p>Transactions are authorized when either one or all of the following conditions are met; </p>
        <p>a) the Account Holder’s signature appears on or is affixed on the sales slip for POS transactions; </p>
        <p>b) the password/PIN is successfully keyed-in for e-commerce, electronic based transactions; </p>
        <p>c) SMS is sent from the Account Holder’s Mobile Phone; </p>
        <p>d) when the Account Holder has successfully unlocked his/her Ecashpay Account for internet transactions; or </p>
        <p>e) once a user is authenticated and logged-in to the Ecashpay App, Web Portal, or Platform, or accessed through
          an accredited Third Party platform or channel; this shall be sufficient evidence that any and all activity has been
          made and validated, and cannot be disputed by the Account Holder.
          The details in the Messenger notification/SMS/Text confirmation message after every transaction and/or the
          entries in the Statement of Transactions are presumed true and correct unless the Account Holder notifies the
          Service Ecashpay Hotline in writing of any dispute thereon within fifteen (15) days from the date of transaction. If
          no dispute is reported within the said period, all transactions and the entries in the Statement of Transactions are
          deemed true and correct. Disputed transactions shall only be credited back to Account Holder’s Ecashpay Account
          once the claim/dispute has been properly processed, investigated, and proven to be in favor of the Account Holder. </p>
        <p>The Account Holder shall pay a corresponding processing fee for each sales slip retrieved upon the request of the
          Account Holder or by Ecashpay Asia Inc. arising from an invalid dispute.</p>
        <br/>
        <p style={Bolder}>14. ACCOUNT CARDHOLDER RESPONSIBILITIES</p>
        <p>To protect Account Holder from any adverse incidents, Account Holder must:</p>
        <ol type="a">
          <li>Sign the Card as soon as received</li>
          <li>Keep Card in a secure place</li>
          <li>Make sure the Card is returned promptly after a Card Transaction</li>
          <li>When the PIN notification is received, memorize the PIN and destroy the notification. Change PIN as necessary</li>
          <li>Make sure your PIN is not seen/read by any other person when being used in the presence of others</li>
          <li>Do not write down or keep PIN on to the Card</li>
          <li>Do not allow any other person to use the Card or PIN</li>
          <li>To fully comply and abide by (i) the terms and conditions governing the use of the card, and (ii) laws, acts
            and regulations and BSP Circulars relevant to electronic money (e-money)</li>
        </ol>
        <p>Account Holder shall be responsible in supplying the correct, updated and accurate information in order for
          Ecashpay to process the transaction. Ecashpay shall solely depend on the information given by the Account Holder,
          any loss or damage suffered by the error, mistake or incorrect debit/credit in the transaction, as a result of the
          information given, shall be accepted by the Account Holder.
          All transactions made using the Service are conclusively presumed made by the Account Holder and the Account
          Holder shall be responsible therefore. The Account Holder has the option to change his/her PIN/password from
          time to time or when he suspects the possibility of unauthorized present or future use of the account</p>
        <br/>
        <p style={Bolder}>15. LOSS OF ECASHPAY CARD</p>
        <p>In case of loss of any of Ecashpay Card, the account holder may block a card using his/her Ecashpay App, Web
          Portal, or Platform, or accessed through an accredited Third Party platform or channel. In case the account holder
          does not have a Ecashpay App, Web Portal, or Platform, or accessed through an accredited Third Party platform or
          channel, the Account Holder shall immediately inform Ecashpay Asia Inc. through the Service Hotline of such loss
          within twenty-four (24) hours, via telephone or thru a written report. Cancellation of the Ecashpay Service/Card
          shall be processed only upon proper authentication of the phone call or the signature in the written report, as the
          case may be. All purchases and transactions made thru the use of the service prior to the report of loss shall
          continue to be the liability of the Account Holder.
          A replacement of the Ecashpay card may also be created and delivered to the Account Holder, at the cost of the
          Account Holder. The remaining Peso Value in the cancelled Ecashpay Card shall be transferred to the new
          Ecashpay Card.</p>
        <br/>
        <p style={Bolder}>16. EXPIRY, RENEWAL, REINSTATEMENT, CANCELLATION OF ACCOUNT</p>
        <p>The Account Holder shall not use the Ecashpay Account after the expiry date indicated thereon. Renewal of the
          Ecashpay Account shall be subject to the approval of Ecashpay Asia Inc. Ecashpay Account which has been
          suspended by Ecashpay Asia Inc. may be reinstated by Ecashpay at its option. The Account Holder’s continued use
          upon suspension, termination or expiration shall be considered a fraudulent act and will be a ground for criminal 
          action. Ecashpay Asia Inc. reserves the right to charge a dormancy fee if the Ecashpay Account remains inactive and/or not
          loaded over a fixed period of time as may be required by Ecashpay Asia Inc., or not to renew, temporarily or
          permanently, the Service upon expiration, cancellation, or suspension.
          Any Peso Value remaining in the Ecashpay Account after cancellation and/or expiration shall be processed by
          Ecashpay Asia Inc., according to the rules set forth by the Bangko Sentral ng Pilipinas (BSP).
          In case of dormancy, the Account may be zeroed out as a result of fees charged. In this case, Ecashpay shall have
          the discretion to close or remove the account in accordance with the applicable law, rules and regulations.</p>
        <br/>
        <p style={Bolder}>17. TERMINATION OF ECASHPAY ACCOUNT</p>
        <p>Termination of Account will be taken should the Account Holder:</p>
        <p>(a.) fails to comply with the Terms & Conditions provided herein or for any reason fail to renew the Ecashpay Account</p>
        <p>(b.) the Ecashpay Account is not renewed by Ecashpay Asia Inc. </p>
        <p>(c.) the account contains suspicious/fraudulent activity</p>
        <p>(d.) Account Holder dies or becomes insolvent, however evidenced, the right to use the Ecashpay account shall be
          terminated without prior notice</p>
        <p>Ecashpay at its exclusive option and without giving any reason and/or prior notice to the Account Holder may
          block, suspend, cancel and withdraw or terminate the Card issued and/or its privileges at any time for whatever
          reason including but not limited to Account Holder’s default, non-payment, financial incapacity, change in personal
          and/or economic circumstance, change in residency status or country or territory of stay, failure to provide
          additional documents requested by Ecashpay, misrepresentation and fraud.
          In all instances, any aggregate and unpaid charges, fees and other expenses for which the Account Holder is liable
          shall immediately become due without need of demand and may be immediately debited without prior notice
          from any remaining funds, money, assets of the aforementioned Account Holder.
          The Account Holder agrees to surrender the Card upon demand by Ecashpay Asia Inc. or to a Merchant. In the
          event of any suspension, termination or confiscation of the Service, the Account Holder agrees to hold Ecashpay
          Asia Inc. free and harmless from any claim, damages, loss, expense, suit or liability whatsoever, arising from such
          suspension, termination or confiscation. </p>
        <br/>
        <p style={Bolder}>19. CHANGE OF CONTACT NUMBERS / ADDRESS</p>
        <p>The Account Holder shall immediately notify Service Hotline via telephone or a written notice of any change in
          his/her residence, office or mailing address and/or contact number/s.</p>
        <br/>
        <p style={Bolder}>20. CHANGE OF NAME</p>
        <p>The Account Holder shall immediately notify the Service Hotline via a written notice of any change in name of the
          Account Holder. The Account Holder shall likewise attach certified true copies of the necessary documents, such as
          but not limited to marriage certificate, or court order, as proof or evidence of such change.</p>
        <br/>
        <p style={Bolder}>21. FRAUDULENT CARD TRANSACTIONS</p>
        <p>Ecashpay Asia Inc. shall have the right to automatically suspend or block the Card in the event that Ecashpay Asia
          Inc. has reason to believe that the Account Holder’s Card account may be used for fraudulent or suspicious
          transactions or by an unauthorized person. Ecashpay Asia Inc. may, but shall not have the obligation to inform the
          Account Holder prior to suspending or blocking the Card pursuant to this Section. The Account Holder
          acknowledges the authority of Ecashpay Asia Inc. to suspend or block the Card and accordingly, the Account
          Holder shall hold Ecashpay Asia Inc. free and harmless against any and all consequences of such suspension or
          blocking, or any loss or damage which the Account Holder may suffer as a result thereof.</p>
        <p>Without giving any reason or notice, and without prejudice to the other provisions hereof, Ecashpay Inc. has the
          absolute discretion to refuse to approve any proposed Card transaction even if there is sufficient available balance,
          to suspend, terminate or cancel the Account Holder’s right to use the Card, to increase or decrease the balance
          limit, to refuse to reissue, renew or replace the Card and/or to introduce, amend, vary, restrict, terminate or
          withdraw the benefits, services, facilities and privileges with respect to or in connection with the Card account,
          whether specifically relating to the Account Holder or generally to all or specific Account Holders.</p>
        <p>Ecashpay Asia Inc. shall not be responsible if it does not approve any service transactions or settlement under the
          Service of the Account Holder even if there is sufficient balance limit available. Neither shall Ecashpay Asia Inc. be
          responsible if the merchant does not accept or honor the Card, even if there is sufficient balance available.</p>
        <p>Ecashpay Asia Inc. may limit the number of purchases, or other Card transactions which may be approved in one
          day. If Ecashpay Asia Inc. detects any unusual or suspicious activity in the Card account, Ecashpay Asia Inc. may
          require the Account Holder to contact the Service Hotline or temporarily suspend the Account Holder’s privileges
          until Ecashpay Asia Inc. can verify the activity. Ecashpay Asia Inc. may likewise approve purchases, service
          transactions, or other Card transactions which in the aggregate cause the card usage to exceed the limit without
          waiving any of Ecashpay Asia Inc.’s right hereunder.</p>
        <p>Account holder authorizes Ecashpay Asia Inc. and/or any of its Agents to disclose to third parties any and all
          information Account holder has provided and consent to the use and processing of such information by Ecashpay
          Asia Inc. and or any of its agents or third parties with the transaction or any investigation in relation thereto.</p>
        <br/>
        <p style={Bolder}>22. DATA PRIVACY NOTICE</p>
        <p>As a condition for use of the service, you permit Ecashpay and its subsidiaries, affiliates, and authorized
          subcontractors to process and/or disclose personal data, including data that may be classified as personal
          information and/or sensitive personal information under the Data Privacy Act of 2012, to authorized agents,
          subsidiaries, affiliates, partners, and other authorized third parties, in order to undertake activities that may
          include, among others:</p>
        <p>1. Conducting analysis for purposes of research and marketing initiatives, including the creation of your personal
          profile based on your interests, preferences, mobility patterns from physical locations that you may visit, and other
          information that may be relevant for marketing and market research purposes;</p>
        <p>2. Managing your account, providing customer care activities, monitoring the quality and security of the network,
          training our staff, and providing the services to you in a timely and efficient manner;</p>
        <p>3. Generating statistical insights based on your usage and other information to assist the Government in planning
          for healthcare, disaster, and other similar initiatives;</p>
        <p>4. Credit scoring programs and initiatives, including but not limited to providing information to the Credit
          Information Corporation in furtherance of the objectives of Republic Act No. 9501, otherwise known as the Credit
          Information System Act;</p>
        <p>5. Sending commercial and promotional advertisements, loyalty and rewards offers, surveys, customer-care, and
          after sales communications, and other broadcast push messages;</p>
        <p>6. Sharing your personal data with Ecashpay’s business partners, authorized third-party content providers or other
          authorized third-party services; and</p>
        <p>7. Such other processing or disclosure that may be required under law or regulations.
          Your personal data will be maintained in our records throughout your availment of the service, and for a maximum
          period of five years thereafter. You are afforded certain rights in relation to your personal data under the Data
          Privacy Act, including the right to object to processing, the right to access your data, the right to rectification of
          inaccurate data, and the right to erasure or blocking of data.</p>
        <br/>
        <p style={Bolder}>23. DISCLOSURE</p>
        <p>Ecashpay Asia Inc. shall keep all Account Holder files in strictest confidence. By supplying its personal information
          for the purpose of availing itself of Ecashpay Asia Account, Account Holder expressly consents to the processing of
          its supplied personal information for the purpose of creating and maintaining such account. Such consent includes
          authorization for Ecashpay to disclose, exchange, and release the said information to its associates, affiliates,
          subsidiaries, officers, employees, agents, lawyers and other consultants, pre-paid/debit/credit bureaus or any such
          persons as Ecashpay Asia Inc. deems necessary, or as required by law, rule or regulation.</p>
        <br/>
        <p style={Bolder}>24. GOVERNING LAW</p>
        <p>This terms and condition shall be construed and governed in accordance with the laws of the Philippines.</p>
        <br/>
        <p style={Bolder}>25. VENUE OF LITIGATION</p>
        <p>Venue of all suits shall exclusively be at Quezon City only to the exclusion of all other courts</p>
        <br/>
        <p style={Bolder}>26. NON-WAIVER OF RIGHTS BY ECASHPAY</p>
        <p>Failure, omission, or delay on the part of Ecashpay Asia Inc. to exercise its right or remedies under these Terms and
          Conditions shall not operate as a waiver. Any such waiver shall be valid only when reduced in writing and delivered
          to the Account Holder.</p>
        <br/>
        <p style={Bolder}>27. SEPARABILITY CLAUSE</p>
        <p>Should any term or condition in this Agreement be rendered void, illegal or unenforceable in any respect under
          any law, the validity, legality and enforceability of the remaining terms and conditions shall not be affected or
          impaired thereby.</p>
        <br/>
        <p style={Bolder}>28. AMENDMENTS</p>
        <p>Ecashpay Asia Inc. may at any time and for whatever reason it may deem proper, amend, revise or modify these
          Terms and Conditions without further notice. It is the Account Holder’s responsibility to regularly check any
          changes to these Terms and Conditions at www.ecashpay.com.ph. The Account Holder’s continued use of the
          Ecashpay service after any such changes constitutes acceptance of the new Terms and Conditions. Failure to notify
          Ecashpay Asia Inc. of Account Holder’s intention to terminate his/her account shall be construed as acceptance by
          the Account Holder of the amendments to these Terms and Conditions.</p>
        <br/>
        <p style={Bolder}>29. AGREEMENT</p>
        <p>The Account Holder agrees to be bound by the Terms and Conditions, Terms of Service and the Privacy Policy
          governing the issuance and use of the Ecashpay service. Should the Account Holder disagree with the Terms and
          Conditions, Terms of Service and the Privacy Policy the Account Holder shall cut the Ecashpay Card (if applicable) in
          half or delete the Ecashpay Application from his/her device (if applicable), and call or provide a written notice of
          cancellation to Ecashpay service Hotline indicated below, otherwise, the Account Holder shall continue to be liable
          for all charges incurred through the use of the Ecashpay service.</p>
        <br/>
        <p style={Bolder}>30. COMPLAINTS HANDLING PROCEDURE</p>
        <p>Our customer's financial questions, needs and feedbacks are very important. If you have any concerns about a
          procedure or have encountered a problem with our service, you may contact our Customer Service number:
          _______________; You have our assurance that we will handle your concerns with utmost confidentiality and will
          strive to resolve them as soon as possible.</p>
        <p>Ecashpay fully cooperates with the BSP in the handling of complaints.
          Financial Consumer Protection Department of the Bangko Sentral ng Pilipinas (BSP): ____________________</p>
        <br/>
        <br/>
        <p style={Bolder}>TERMS OF SERVICE</p>
        <br/>
        <p style={Bolder}>DEFINITION OF TERMS</p>
        <p>1. “Terms” used in this document pertains to the whole of this “Terms and Conditions of Use” including its
          subsequent amendments or revisions.</p>
        <p>2. “Services” means both mobile applications, channels and services, including all associated platforms linked
          therefrom, Ecash pay Asia Inc., Inc., Ecashpay Asia Inc. server and database, as well as all material, information,
          content, application and functionality available in and through them.</p>
        <p>3. “We” refers to the vendors and providers of the Services, including but not limited to Ecashpay Asia Inc., its
          directors, officers, employees, agents, and/or assigns and successors, as well as the owners/operators, affiliates,
          and/or licensors of the Services.</p>
        <p>4. “You” refers to you as a user of the Services, and includes your agents, assigns, or successors, as well as your
          parents or legal guardians, as the case may be, for those below the age of majority.</p>
          <p>5. “User content” refers to any content generated or uploaded by a user of the Services, which includes
            photographs, videos, music or other multimedia files, documents, information, or anything else that can be stored
            electronically.</p>
        <br/>
        <p style={Bolder}>USER REPRESENTATION AND WARRANTIES</p>
        <p>1. By visiting and/or using the Services, you signify your agreement to these Terms and you further agree, affirm
          and warrant that there is and there shall be no agency, partnership, joint venture, employer-employee, licensorlicensee
          or franchisor-franchisee relationship between Ecashpay Asia Inc. and you.</p>
        <p>2. You must be more than 18 years of age, or that you possess legal parental or guardian consent (for ages 12-17),
          and that you are fully able and competent to legally bind yourself to and abide by all of the terms, conditions,
          obligations, declarations, affirmations, representations, and warranties set forth in these Terms. </p>
        <p>3. By visiting and/or using the Services, you declare, represent and warrant that you understand that when using it,
          you will be exposed to content, material or information from a variety of sources, and that Ecashpay Asi Inc. is not
          responsible for the accuracy, usefulness, safety, completeness, or intellectual property rights of or relating to such
          content, material or information, user generated, submitted or otherwise, including those content, material or
          information that may be linked to it.</p>
        <p>4. You further understand and acknowledge that Ecashpay may have or may develop and implement additional
          features and tie-ups with other entities. By virtue of such, you may be exposed to content that may infringe on
          your intellectual property rights or that of your principal; or content that may be violative of your privacy, and/or
          publicity rights; or content that is knowingly false and/or defamatory, inaccurate, abusive, vulgar, hateful,
          harassing, obscene, indecent, pornographic, profane, threatening, racist, gruesome, objectionable, offensive to
          public morals, invasive of another’s privacy, or otherwise violative of any rule, regulation, or law; or content that
          contains any viruses, Trojan horses, worms, time bombs, bots, any malware, or any computer program, code, or
          routine that may or is intended to damage, detrimentally interfere with, surreptitiously intercept or expropriate
          any system, data or personal information and that these you undertake at your own risk, and you hereby agree
          that Ecashpay Asia Inc. shall not be responsible, liable, or accountable for any of the foregoing. You also agree to
          indemnify and hold Ecashpay Asia Inc. harmless to the fullest extent allowed by law regarding all matters related
          to or arising out of your use of the Services.</p>
        <p>5. By visiting and/or using the Services, you declare, undertake and affirm that you take sole responsibility for
          whatever consequences that may arise out of your visit and/or use of the Services. You understand that Ecashpay
          Asia Inc. shall not be liable for, and you hereby hold Ecashpay Asia Inc. free from, any direct, incidental, special,
          consequential, indirect, or punitive damages whatsoever resulting from your use of, or your inability to use, the
          Services. On the other hand, you declare, undertake and affirm that you shall indemnify Ecashpay Asia Inc. for any
          direct, incidental, special, consequential, indirect, or punitive damages whatsoever resulting from your use of the
          Services. You further agree, undertake, and commit to indemnify Ecashpay Asia Inc. for any breach of its
          proprietary and other rights, including breach of these Terms, which you may commit in the course of or arising
          out of your use of the Services.</p>
        <p>6. You further declare, represent and warrant that you are aware that any content, material or information
          presented to you as part of the Services, including but not limited to advertisements and sponsored content,
          material or information within the Services may be protected by intellectual property rights which are owned by
          the respective sponsors, advertisers, or other persons or companies on their behalf. You agree that such
          advertisements and sponsored content, material or information may be placed on the Services and/or coupled to
          your User Content without prior notice and without need of explicit consent from you anymore as you now give
          such consent. You hereby declare, acknowledge, and affirm personal and sole commitment and obligation to
          respect uphold and honor any intellectual property rights which may cover such any content, material or
          information presented to you as part of the Services, including but not limited to advertisements and sponsored
          content, material or information within the Services.</p>
        <p>7. You acknowledge that any material, information or content which you create, upload, transmit, or display while
          using the Services may become publicly available, whether or not intended by you or by Ecashpay Asia Inc. for such
          material, information or content to be made publicly available. You further acknowledge, affirm and take sole
          responsibility for any consequences arising out of the use, authorized, lawful or otherwise, of any material,
          information or content which you create, upload, transmit or display using the Services. By visiting and/or using
          the Services, you hereby declare, acknowledge, and affirm to hold Ecashpay Asia Inc. free from any liability by law 
          or by equity arising therefrom, including the unauthorized or unlawful use thereof by a third party, regardless of
          negligence, lack of foresight, or lack of skill on the part of Ecashpay Asia Inc. which may be directly or indirectly
          contributory to such unauthorized or unlawful use.</p>
        <p>8. You also acknowledge that you are free to opt out of the Services by voluntarily desisting from further use of the
          Services or by serving a notice of termination of use to Ecashpay Asia Inc. and closing your account. Closure of an
          account with the Services does not nullify, void, cancel, or otherwise adversely affect any and/or all of the legal
          obligations and liabilities you may have incurred or may still incur relative to your use of the Services, as such
          termination of use of the Services and/or closure of an account with the Services does not nullify, void, cancel, or
          otherwise adversely affect any and/or all of the rights which may have accrued in favor of Ecashpay Asia Inc.
          including the rights, consents, permissions and licenses to use any and/or all User Content that you have created,
          uploaded, transmitted, or displayed using the Services</p>
        <br/>
        <p style={Bolder}>ACCEPTABLE USE POLICY</p>
        <br/>
        <p style={Bolder}>YOU AND THE SERVICES</p>
        <p>1. You agree not to incorporate any word in your name, message identification, or custom user title that is
          defamatory, obscene or profane, or which violates any trademark, service mark, or other intellectual property
          rights of any third party, including that of Ecashpay Asia Inc. You likewise agree not to use any trademark, trade
          name, service mark, or logo in a way that is likely or intended to cause confusion about the owner or authorized
          user of such marks, names or logo.</p>
        <p>2. You agree not to alter, modify, or cause the alteration or modification, of the Services, without prior written
          consent from Ecashpay Asia Inc. You further agree not to use the Services for any commercial use, without prior
          written authority from Ecashpay Asia Inc.</p>
        <p>3. You agree not to use any “deep-link”, “page-scrape”, “robot”, “spider” or other automatic device, program,
          algorithm or methodology, or any similar or equivalent manual process, to access, acquire, copy or monitor any
          part of the Services, or in any way reproduce or circumvent its navigational structure or presentation, as well as to
          obtain or attempt to obtain any material, document or information through any means not purposely made
          available through the Services.</p>
        <p>4. You agree not to gain or attempt to gain unauthorized access to any part or feature of the Services or to any
          other system or network connected to the Services. You also agree not to gather, harvest, or otherwise collect
          information about others using the Services without their explicit informed consent; nor restrict, prevent or
          prohibit any other party from using the Services, including but not limited to such actions which may tend to
          discourage others from using the Services, such as stalking, flaming or the lashing out at other parties, spamming
          or the sending of unsolicited information, advertisement or content, flooding or the sending of repetitive message,
          trolling or the use of insulting or deliberately divisive information, material or content, other forms of annoyances,
          and the like</p>
        <p>5. You agree not to circumvent, disable, or otherwise interfere with security-related features of the Services,
          including those that prevent or restrict use or copying of any content, material or information available on or
          through the Services, as well as those that enforce limitations on the use of the Services.</p>
        <p>6. You agree not to probe, scan or test the vulnerability of the Services or any network connected to it, and not to
          breach the security or authentication measures on the same. You agree not to reverse look-up, trace or seek to
          trace any information on any user of or visitor to the Services, or any other customer of Ecashpay Asia Inc.
          including any account maintained with the Services not owned by you, to its source, or exploit the Services or any
          information made available or offered by or through the Services, in any way where the purpose is to reveal any
          information, including but not limited to personal identification, other than your own information.</p>
        <p>7. You agree to use or access the Services for your information and personal use solely as intended through the
          provided functionality of the Services. You agree not to copy or download any material or content from or through
          the Services unless such copying or downloading is explicitly allowed by a visible manifestation thereof such as a
          “download” button or a similar link ostensibly displayed. You further agree not to engage or attempt to engage in
          the use, copying, transmission, broadcast, display, distribution or sale of any of the contents, material or
          information available on or through the Services, including user comments and the like, other than as expressly
          permitted herein, or as explicitly indicated in the Services, including use thereof for commercial purposes.</p>
        <p>8. You agree that you will not take any action that imposes an unreasonable or disproportionately large load on
          the infrastructure of the Services or its systems or networks, or any systems or networks connected to the Services.</p>
        <p>9. You agree not to use any device or routine to interfere or attempt to interfere with the proper working of the
          Services or any transaction being conducted using the Services, or with any other person’s use of the Services. You
          agree that you will not engage in any activity that interferes with or disrupts the Services or the servers and
          networks which are connected to the Services.</p>
        <p>10. You agree not to use the Services for any purpose that is illegal, unlawful or prohibited by these Terms, or to
          solicit the performance of any illegal activity or other activity which infringes on the rights of Ecashpay Asia Inc. or
          others. You further agree not to modify, rent, lease, loan, sell, distribute or create derivative works based on any
          content, material or information, either in whole or in part, available on or through the Services, unless you have
          been specifically permitted to do so by Ecashpay Asia Inc. or by the owner of that content, material or information
          in a separate agreement.</p>
        <br/>
        <p style={Bolder}>YOU AND USER CONTENT</p>
        <p>1. You agree to and hereby undertake the sole responsibility, and hold Ecashpay Asia Inc. free of liability to you or
          to any third party, for any User Content that you create, upload, transmit, or display while using the Services. You
          agree and hereby undertake sole responsibility for the consequences of your actions and interactions using the
          Services, and hereby stipulate admission of liability to Ecashpay Asia Inc. for whatever loss or damage Ecashpay
          Asia Inc. may suffer as a consequence of your use or misuse of the Services.</p>
        <p>2. You agree not to share, create, upload, transmit or display using the Services any material, information, or User
          Content which is or may be covered by copyright, patent, trade secret, trademark, trade name, service mark or any
          property rights, including privacy and/or publicity rights, unless you have the necessary licenses, rights, consents,
          and permissions to use and to authorize Ecashpay Asia Inc. to use any and/or all User Content that you create,
          upload, transmit, or display using the Services</p>
        <p>3. You agree not to use fictitious name and concealing true name for the purpose of concealing crime, evading the
          execution of a judgment or causing damage.</p>
        <p>4. You agree not to share, create, upload, transmit or display using the Services any material, information, or User
          Content which: infringes on the intellectual property, privacy, and/or publicity rights of any third party; is
          knowingly false and/or defamatory, inaccurate, abusive, vulgar, hateful, harassing, obscene, indecent,
          pornographic, profane, threatening, racist, gruesome, offensive to public morals, invasive of another’s privacy, or
          otherwise violative of any rule, regulation, or law; contains any viruses, Trojan horses, worms, time bombs, bots,
          any malware, or any computer program, code, or routine that may or is intended to damage, detrimentally
          interfere with, surreptitiously intercept or expropriate any system, data or personal information; and/or that
          which promotes or abets piracy. You further agree not to engage in pyramid, ponzi or similar schemes or other
          damaging schemes in the future; not to start or forward chain letters; and not to conduct or aid in the conduct of
          surveys, contests, petitions, and the like, using the Services, unless the Services has been specifically designed and
          explicitly made available for such purpose.</p>
        <p>5. You represent, warrant and affirm that you own or that you have the necessary licenses, rights, consents, and
          permissions to use and to authorize Ecashpay Asia Inc. to use, reproduce, adapt, modify, translate, publish, publicly
          perform, publicly display, distribute, or transmit over public networks and in various media any and/or all User
          Content that you create, upload, transmit, or display using the Services, as you hereby authorize and grant
          Ecashpay Asia Inc. perpetual, irrevocable, worldwide, royalty-free and non-exclusive right, license, consent and
          permission to use, reproduce, adapt, modify, translate, publish, publicly perform, publicly display, distribute, or
          transmit over public networks and in various media any and/or all User Content which you may create, upload,
          transmit, or display using the Services, in a manner Ecashpay Philippines, Inc. may deem fit and necessary,
          including but not limited to making such User Content available to a third party in compliance with a requirement
          of law, a rule or regulation, or making such User Content available to any third party for its use, reproduction,
          adaptation, modification, translation, publication, public performance, public display, distribution or transmission.
          You likewise hereby irrevocably agree, affirm and warrant to hold Ecashpay Asia Inc. free from any liability, both
          under equity and the law, arising or that may arise out of its use of your User Content or the use of your User
          Content by a third party to which Ecashpay Asia Inc. made available your User Content.</p>
        <p>6. Unless otherwise agreed in writing with Ecashpay Asia Inc. you hereby agree to and acknowledge sole
          responsibility for protecting and enforcing any proprietary rights you or your principal may have on any User
          Content made available through the Services. You further acknowledge, agree, and admit that Ecashpay Asia Inc. is
          not responsible for the actions of other users or any third party and hereby free Ecashpay Asia Inc. and waive in its
          favor any or whatever right or claim you or your principal may have against Ecashpay Asia Inc. relative to any User
          Content which you or a third party may create, upload, transmit or display using the Services.</p>
        <p>7. You agree to store your password on the device and our servers in an encrypted form. This form of encryption
          disguises your password on the server, but still allows us to authenticate you when you sign into the Services.</p>
        <p>8. You agree that by supplying its personal information for the purpose of availing yourself of the Service, you
          expressly consent to the processing of its supplied personal information for the purpose of creating and
          maintaining your account. Such consent includes authorization for Ecashpay to disclose, exchange, and release the
          said information to its associates, affiliates, subsidiaries, officers, employees, agents, lawyers and other
          consultants, pre-paid/debit/credit bureaus or any such persons as Ecashpay deems necessary, or as required by
          law, rule or regulation.</p>
        <br/>
        <p style={Bolder}>THIRD PARTY CONTENT & SERVICES</p>
        <p>1. The Services contains content provided by third party services and resources. You acknowledge and agree that
          we are not responsible or liable for: the availability or accuracy, appropriateness, completeness or noninfringement
          of such Third Party Services; or the content, products, or services available on or through such Third
          Party Services. The availability of such Third Party services does not imply any endorsement by us of such Third
          Party services or the content, products, or services available therefrom.</p>
        <p>2. You may not remove, alter or obscure any copyright, trademark, service mark or other proprietary rights notices
          incorporated in or accompanying the application and the services or in any Third Party Services.</p>
        <p>3. Ecashpay Asia Inc. makes no representation or warranties whatsoever about any service, content and / or any
          other resources provided by the Third Party.</p>
        <br/>
        <p style={Bolder}>RESERVED RIGHTS</p>
        <p>1. You understand and agree that Ecashpay Asia Inc. reserves the right, at its sole discretion but without obligation,
          to deny access to and / or discontinue the Services or any component thereof to anyone at anytime, temporarily or
          permanently, without prior notice. You hereby irrevocably agree, affirm and warrant to hold Ecashpay Asia Inc.
          free from any liability, both under equity and the law, arising or that may arise out of any such denial of access to
          or the discontinuance of the Services.</p>
        <p>2. You understand and agree that Ecashpay Asia Inc. reserves the right, at its sole discretion but without obligation,
          to collect, screen, review, flag, filter, modify, block, refuse or remove any and/or all information provided by any
          user, explicitly or implicitly to and through the Services, including but not limited to hardware information, IP
          address, browser-type related information, cookies and the like. You hereby irrevocably agree, affirm and warrant
          to hold Ecashpay Asia Inc. free from any liability, both under equity and the law, arising or that may arise out of
          any such collection, screening, review, flagging, filtering, modification, blocking, refusal or removal of any and/or
          all information provided by any user to and through the Services.</p>
        <p>3. You understand and agree that Ecashpay Asia Inc. reserves the right, at its sole discretion but without obligation,
          to enhance, improve, develop and introduce new features and functionalities to the Services at anytime and
          without prior notice. You hereby understand, agree, and affirm that any such enhancement, improvement,
          development, new feature and/or new functionality to the Services shall form part of the Services as defined
          herein and thus shall likewise be covered by these Terms and its subsequent revisions or amendments, as
          applicable.</p>
        <p>4. You understand and agree that Ecashpay Asia Inc. reserves the right, at its sole discretion, to verify, check, crossrefer,
          validate, and ascertain the veracity and truthfulness of all information supplied by you by acquiring,
          accessing, retrieving, or otherwise acquiring similar or additional information supplied by you to other third-party
          service providers, including, but not limited to telecommunications providers, etc. You hereby expressly,
          unequivocally, and voluntarily allow Ecashpay Asia Inc. to request for and secure such information, and expressly,
          unequivocally, and voluntarily instruct such third-party providers to: (a) receive and process Ecashpay Asia
          Philippine’s request; (b) favorably act at all times on any such request by producing the information requested; and 
          (c) when requested by Ecashpay Asia Inc., Inc. provide the latter with certified digital or printed copies of the said
          information.</p>
        <p>5. You understand and agree that Ecashpay Asia Inc. reserves the right, at its sole discretion but without obligation,
          to send you or cause to send you service updates and/or messages, including SMS, notifications, email and/or any
          data message transmission, informing you of enhancements, improvements, developments, features,
          functionalities, products, promotions, offers, advertisement and/or any other information relative to the Services
          and Ecashpay Asia Inc. Ecashpay Asia Inc. makes no warranty of any kind, express or implied, for such service
          updates and/or messages, but you hereby agree to receive such service updates and/or messages and hold
          Ecashpay Asia Inc. free from any liability and/or claims for indemnification or damages that may arise therefrom.</p>
        <p>6. You understand and agree that Ecashpay Asia Inc. reserves the right, at its sole discretion but without obligation,
          to set limitations to and charge fees and applicable taxes for the use of the Services, at any time and without prior
          notice. You further understand and agree that Ecashpay Asia Inc. reserves the right, at its sole discretion and under
          no obligation, to change the applicable fees, taxes and charges levied for the use of the Services, at any time and
          with prior written notice to you sixty (60) days prior to effective date of change in fees / charges /penalties.</p>
        <p>7. You understand and agree that Ecashpay Asia Inc. reserves the right, at its sole discretion but without obligation,
          to change, modify or amend these Terms without prior notice. You hereby understand, agree, and affirm that it
          shall be your sole responsibility to be aware of any such change, modification or amendment, which shall take
          effect immediately upon publication the same way as this original Terms has been published, or upon its
          availability through the Services and which shall bind you as soon as you use or access the Services regardless of
          whether or not you are already aware of such change, modification or amendment.</p>
        <p>8. You understand and agree that Ecashpay Asia Inc. reserves the right, at its sole discretion but without obligation,
          to enforce the provisions of these Terms. Non-enforcement of any of the rights of Ecashpay Asia Inc. under these
          Terms, under the law or under principles of equity shall not be construed as a waiver thereof. Likewise, no
          subsequent course of action by Ecashpay Asia Inc. by you, and/or by any third party, individually or collectively,
          shall not operate and shall not be construed to operate as abandonment, amendment, or modification of these
          Terms. You likewise hereby declare, affirm and undertake the sole obligation to indemnify Ecashpay Asia Inc. or
          any third party for any damage Ecashpay Asia Inc. or said third party may sustain as a result of your use of the
          Services.</p>
        <p>9. You understand and agree that Ecashpay Asia Inc. reserves the right, at its sole discretion but without obligation,
          to limit the provision, availability, quantity and quality of any feature, product or service to any person or to
          anyone within the same geographic area, demographic profile, or any other market, commercial, and/or trading
          segments. You likewise understand and agree that Ecashpay Asia Inc. reserves the right, at its sole discretion but
          without obligation, to administer and operate any and/or all of the Services from any or various locations outside
          the Republic of the Philippines. You further understand, agree and hold Ecashpay Asia Inc. free from any liability
          arising therefrom, that not all features, products, or services discussed, referenced, provided or offered through or
          in the Services are available to all persons or in all geographic locations, or are appropriate or available for use
          outside the Republic of the Philippines. Any part or the whole of the Services or these Terms are void where
          prohibited. You hereby understand, agree, and undertake sole responsibility for your continued access to or use of
          the Services, as well as the results or consequences of such access and use, including the responsibility for
          compliance with applicable local laws and the sole liability for non-compliance or breach thereof.</p>
        <br/>
        <p style={Bolder}>10. Table of Fees and Charges:</p>
        {/*
         *
         *
         *
        */}
        <br/>
        <p style={Bolder}>PRIVACY POLICY</p>
        <p>We at <b>ECASHPAY ASIA, INC. (“ECASHPAY”)</b> commit to observe and respect your data privacy rights.</p>
        <p>We uphold and recognize your rights as a data subject under the provisions of the Data Privacy Act of 2012 and its
          Implementing Rules and Regulations, and are cognizant of our obligation to ensure that all pieces of personal data
          in our processing systems are secured and protected.</p>
        <p>When you access this website and avail of our services and/or sign up as an accountholder, you acknowledge that
          you accept the practices and commit to comply with the policies outlined in this Privacy Policy.</p>
        <br/>
        <p style={Bolder}>Information we collect</p>
        <p>We automatically collect the following pieces of information when you use Ecashpay: information sent to us by
          your computer, mobile phone or other access device, including, but not limited to your browser type, language
          preference, referring site, additional websites requested, the date and time of such request and Internet Protocol
          (IP) addresses. We also use cookies and web beacons to store information and to better understand your needs
          and requirements as a user. </p>
        <p>When you create your account with Ecashpay, the following information may be collected from you: your name,
          date of birth, gender, nationality, address, and competent proof of your identity, i.e., government-issued
          identification cards like Unified Multi-Purpose Identification Card (UMID), passport, driver’s license and the like.</p>
        <p>We also collect information about your transactions and activities. For purposes of authentication and fraud
          detection, we may collect information about you and your interactions with Ecashpay; and evaluate your
          computer, mobile phone or other access device for any malicious software or activity. Also, by calling or
          communicating with us, you acknowledge that our communication may be overheard, monitored, or recorded
          without further notice or warning.</p>
        <p>We may also collect information about you from third parties like the Credit Information Corporation; government
          agencies engaged in the processing of personal data like the Social Security System (SSS), Department of Foreign
          Affairs (DFA), the Land Transportation Office and similar agencies; as well as social media sites. We may undertake
          this collection in certain instances to compare information and verify with the mentioned third parties the
          information that you provided us. </p>
        <p>When you choose to associate your social media accounts with Ecashpay, you acknowledge that that social media
          site is controlled by that site and that you authorize Ecashpay to have access to your information stored in that site/s. </p>
        <p>You may connect with Ecashpay through your mobile device. The provisions of this Privacy Policy are applicable to
          all mobile access and use of mobile devices.</p>
        <p>When you access Ecashpay using your mobile device, you may be sending and we may be receiving information on
          your location and your mobile device, which we may use to provide you with location-based services, such as
          advertising, search results, and other personalized content. </p>
        <br/>
        <p style={Bolder}>How we use personal information</p>
        <p>We use your personal information to provide you the services and support that you require or in relation to the
          transactions you have requested. We will also use your personal information, particularly your contact details, for
          official correspondences. Your personal information also helps us modify, analyze and improve our products and services. </p>
        <p>In addition to providing you Ecashpay services and customer support, we also use your personal information to
          process transactions and send notices about the same; resolve disputes and problems; and collect fees. </p>
        <br/>
        <p style={Bolder}>Disclosing personal information</p>
        <p>To fully provide you our services, we will share or disclose some of your personal information with other Ecashpay
          users like buyers, sellers, merchants and card issuers. </p>
        <p>We may share your name, account number, contact details, shipping and billing addresses. We may also provide
          details of held, failed or invalidated transactions, if any. For purposes of goods or items that must be returned or
          are subject of a dispute, we may provide a buyer with the seller’s address. </p>
        <p>For purposes of sending you money where the sender enters your email address or phone number, we will disclose
          to said sender your registered name so he or she can verify that he or she is sending money to his or her intended
          recipient. </p>
        <p>To enable third parties or merchants to accept or send payments from or to you using Ecashpay, such third party
          or merchant may share information about you with us, such as your email address or mobile phone number, to
          notify you that a payment has been sent to you or when you try to make a payment to a merchant or third party.
          We use this information to make sure that you are a registered Ecashpay customer and that Ecashpay as a form of
          payment can be enabled, or to inform you of payment statuses. </p>
        <p>Rest assured that we will not disclose your credit card or bank account details to anyone you have transacted with
          using Ecashpay, or with the third parties that offer or use Ecashpay, except with your express permission or if we
          are required to do so to comply with credit card rules, a subpoena, or other legal process.</p>
        <p>With your express consent, we will share some of your personal information with Ecashpay’s sister companies to
          send you marketing communications; with our partner-banks for purposes of creating and offering you a credit card; </p>
        <p>Your express consent for disclosure may not be required when there are grounds to believe that the disclosure is
          necessary to prevent threats to life or health; for law enforcement purposes; or in fulfillment of legal and
          regulatory requirements and requests.</p>
        <p>We do not engage in the business of selling members’ personal information to third parties.</p>
        <br/>
        <p style={Bolder}>How you can update your personal information</p>
        <p>Pursuant to your rights as a data subject under the Data Privacy Act of 2012, you can update your personal data
          anytime by accessing your account with us. Sharing your updated information is subject to the conditions
          mentioned above.</p>
        <br/>
        <p style={Bolder}>How you can access your personal information</p>
        <p>We also recognize that you have the right to gain reasonable access to your personal data. If you would like to
          view or access your personal data, please contact us. Please note that we may charge you administrative fee for
          retrieving your personal information records.</p>
        <p>You undertake to treat your username, password and other credentials with utmost confidentiality and not make it
          available to unauthorized third parties. We will not assume any liability arising from any misuse of your username,
          password and other credentials.</p>
        <br/>
        <p style={Bolder}>How we secure your personal information </p>
        <p>We guarantee that we handle your personal information adhering to established security standards and
          procedures. We ensure that access to personal information is restricted. We maintain technology products and
          systems to prevent unauthorized computer access. We securely dispose of or delete your personal information
          when there is no longer business or legal reason to keep the same. </p>
        <br/>
        <p style={Bolder}>What we require from you </p>
        <p>We require you to employ a strong and unique alpha-numeric password as the same will serve as your key to your
          account and as such, must only be known to you. Do not share your password with anyone. Sharing your
          password with others means that you take responsibility for all actions taken in the name of your account and the
          consequences thereof. Losing control of your password means losing substantial control over your personal data
          and other information that you have submitted to us. You could also be held liable for legally binding actions taken
          on your behalf. Thus, if your password has been compromised, or if you have grounds to believe that your
          password has been compromised, you should immediately contact us and change your password. </p>
        <p>We also require you to log off of your account and delete your browsing and search history and cookies before you
          log out of a shared device or computer.</p>
        <br/>
        <p style={Bolder}>Minor</p>
        <p>Availment of our products and services through this website is not intended for children, or those below eighteen
          (18) years of age or older but are incapable of taking care of themselves as defined under Philippine laws. If you
          are a child as defined earlier, you may use or avail of our services only with the involvement and consent of a
          parent or guardian.</p>
        <br/>
        <p style={Bolder}>Changes to this Privacy Policy</p>
        <p>We shall regularly review the sufficiency of this Privacy Policy. We reserve the right to modify and change the
          Privacy Policy at any time. Any changes to this policy shall be published accordingly. We encourage you to
          periodically review this policy to be informed of how we are using and protecting your personal information.</p>
        <br/>
        <p style={Bolder}>Data Protection Officer</p>
        <p>We have appointed our data protection officer for you to contact if you have any questions or concerns about our
          personal information policies or practices. You may get in touch with our data privacy officer via email address
          dpo@ecashpay.com.ph and landline number (02) 404-9863. </p>
        <br/>
        <p style={Bolder}>PRIVACY NOTICE</p>
        <br/>
        <p style={Bolder}>Pieces of information Ecashpay collects</p>
        <p>If you are merely browsing Ecashpay website, Ecashpay collects the same basic information that most websites
          collect from everybody, regardless of whether you are an accountholder or not.</p>
        <p>Ecashpay collects the following pieces of information from its website visitors: browser type, language preference,
          referring site, additional websites requested, and the date and time of such request. Potentially personallyidentifying
          information like Internet Protocol (IP) addresses is likewise collected. </p>
        <br/>
        <p style={Bolder}>Why does Ecashpay collect these?</p>
        <p>Ecashpay collects these pieces of information to know how its visitors use and what topic or topics contained in its
          website catch their attention. Likewise, these data are collected for purposes of monitoring and ensuring the
          website’s security.</p>
        <br/>
        <p style={Bolder}>Information from users and accountholders</p>
        <p>If you avail of the services of Ecashpay, we collect the following information from you: your transactions and
          activities, including your bank and/or credit card details. </p>
        <p>If you opt to be an accountholder of Ecashpay, you will be required to provide some basic information at the time
          of the creation of your account, i.e., name, date of birth, gender, nationality, address, and competent proof of your
          identity, i.e., government-issued identification cards like Unified Multi-Purpose Identification Card (UMID),
          passport, driver’s license and the like. </p>
        <p>“User Personal Information” is information that can be used on its own or with other information to identify,
          contact, or locate a single person, or to identify an individual in context. Examples of the same are a user name and
          password, an email address, a real name, and a photograph. </p>
        <p>“User Personal Information” excludes aggregated, non-personally identifying information, which Ecashpay may
          utilize to operate, improve and optimize its website and services. </p>
        <br/>
        <p style={Bolder}>Why does Ecashpay collect these pieces of user personal information?</p>
        <p>Ecashpay collects these pieces of information to assist you in creating your account and to provide you the services
          you requested. Ecashpay uses your user personal information, more particularly your user name, to identify you on
          its website. Your email address will only be used by Ecashpay to communicate with you, and only in relation to
          your account with Ecashpay. </p>
    </Col>
  </Row>
)

export default TermsAndConditionsPage

//Wayne Dyer
//You can't give away what you don't have. People who are not good at giving away  , can't give away love because they don't have it to give away.
//AS YOU THINK SO SHALL YOU BE
//There's no accidents in this universe.
//We all show up here with a purpose.
// There's an intelligence that is a part of everything and everyone and all of us are connected to it.
//Don't die with your music still in you. All of us have some music playing and too many of us are afraid to listen to that music and march to it.