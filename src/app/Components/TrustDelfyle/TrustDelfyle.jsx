"use client";

import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./TrustDelfyle.module.css"; // Import the CSS module
import Button from "../Button/Button"; // Import the Button component

// Use the local paths for the images
const containerImageUrls = [
  "/images/svg-1.jpg",
  "/images/svg-2.jpg",
  "/images/svg-3.jpg",
  "/images/svg-4.jpg",
  "/images/svg-5.jpg",
  "/images/male.jpg",
];

const TrustDelfyle = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Container 1 observer - triggers when in view
  const { ref: container1Ref, inView: container1InView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  // Container 1 exit observer - triggers when container 1 leaves viewport
  const { ref: container1ExitRef, inView: container1ExitInView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  // Container 5 observer - triggers when top edge enters viewport
  const { ref: container5Ref, inView: container5InView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  // Container 5 exit observer - triggers when container 5 leaves viewport
  const { ref: container5ExitRef, inView: container5ExitInView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  // Other container observers for animation changes
  const { ref: container2Ref, inView: container2InView } = useInView({
    threshold: 0.5,
  });
  const { ref: container3Ref, inView: container3InView } = useInView({
    threshold: 0.5,
  });
  const { ref: container4Ref, inView: container4InView } = useInView({
    threshold: 0.5,
  });
  const { ref: container6Ref, inView: container6InView } = useInView({
    threshold: 0.2,
    rootMargin: "-10% 0px",
  });

  const [activeIdx, setActiveIdx] = useState(0);
  const [fade, setFade] = useState(true);
  const [displayedIdx, setDisplayedIdx] = useState(0);

  // Handle visibility based on all containers
  useEffect(() => {
    if (container5ExitInView || container1ExitInView) {
      setIsVisible(false);
    } else if (
      container1InView ||
      container2InView ||
      container3InView ||
      container4InView ||
      container5InView ||
      container6InView
    ) {
      setIsVisible(true);
    }
  }, [
    container1InView,
    container2InView,
    container3InView,
    container4InView,
    container5InView,
    container6InView,
    container5ExitInView,
    container1ExitInView,
  ]);

  // Handle animation changes
  useEffect(() => {
    // Prioritize later containers as they scroll into view
    if (container6InView) {
      setActiveIdx(5);
    } else if (container5InView) {
      setActiveIdx(4);
    } else if (container4InView) {
      setActiveIdx(3);
    } else if (container3InView) {
      setActiveIdx(2);
    } else if (container2InView) {
      setActiveIdx(1);
    } else if (container1InView) {
      setActiveIdx(0);
    }
  }, [
    container1InView,
    container2InView,
    container3InView,
    container4InView,
    container5InView,
    container6InView,
  ]);

  // Handle fade transitions
  useEffect(() => {
    if (activeIdx === displayedIdx) return;
    setFade(false);
    const timeout = setTimeout(() => {
      setDisplayedIdx(activeIdx);
      setFade(true);
    }, 600);
    return () => clearTimeout(timeout);
  }, [activeIdx, displayedIdx]);

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.mainContainer}>
        <div className={styles.leftColumn}>
          <div
            ref={container1ExitRef}
            style={{ height: "1px", marginBottom: "200px" }}
          />
          <div ref={container1Ref} className={styles.innerContainerParent}>
            <div className={styles.innerContainer}>
              <section className={styles.contentSection}>
                <div className={styles.headerSection}>
                  <img
                    alt="Abstract colorful Solutions icon"
                    className={styles.icon}
                    src="/icon/trustDelfyle1.png"
                  />
                  <span className={styles.headerText}>Solutions</span>
                </div>
                <h1 className={styles.title}>End-to-End Services</h1>
                <p className={styles.description}>
                  From company setup to compliance.
                </p>
                <Button text="Something" type="smallWhatWeDoButton" />
              </section>
            </div>
          </div>

          <div
            ref={container2Ref}
            className={`${styles.innerContainerParent} ${styles.innerContainerParentBorderYellow}`}
          >
            <div className={styles.innerContainer}>
              <section className={styles.contentSection}>
                <div className={styles.headerSection}>
                  <img
                    alt="Abstract colorful Expertise icon"
                    className={styles.icon}
                    src="/icon/trustDelfyle2.png"
                  />
                  <span className={styles.headerText}>Expertise</span>
                </div>
                <h1 className={styles.title}>Expert Team</h1>
                <p className={styles.description}>
                  Chartered Accountants, CS, Lawyers and Legal Experts.
                </p>
                <Button text="Something" type="smallWhatWeDoButton" />
              </section>
            </div>
          </div>

          <div
            ref={container3Ref}
            className={`${styles.innerContainerParent} ${styles.innerContainerParentBorderLime}`}
          >
            <div className={styles.innerContainer}>
              <section className={styles.contentSection}>
                <div className={styles.headerSection}>
                  <img
                    alt="Abstract colorful Coverage icon"
                    className={styles.icon}
                    src="/icon/trustDelfyle3.png"
                  />
                  <span className={styles.headerText}>Coverage</span>
                </div>
                <h1 className={styles.title}>Pan-India Presence</h1>
                <p className={styles.description}>
                  Remote and city-based operations.
                </p>
                <Button text="Something" type="smallWhatWeDoButton" />
              </section>
            </div>
          </div>

          <div
            ref={container4Ref}
            className={`${styles.innerContainerParent} ${styles.innerContainerParentBorderCyan}`}
          >
            <div className={styles.innerContainer}>
              <section className={styles.contentSection}>
                <div className={styles.headerSection}>
                  <img
                    alt="Abstract colorful Protection icon"
                    className={styles.icon}
                    src="/icon/trustDelfyle4.png"
                  />
                  <span className={styles.headerText}>Protection</span>
                </div>
                <h1 className={styles.title}>Secure & Confidential</h1>
                <p className={styles.description}>
                  Fully compliant with data protection norms.
                </p>
                <Button text="Something" type="smallWhatWeDoButton" />
              </section>
            </div>
          </div>

          <div
            ref={container5Ref}
            className={`${styles.innerContainerParent} ${styles.innerContainerParentBorderPurple}`}
          >
            <div className={styles.innerContainer}>
              <section className={styles.contentSection}>
                <div className={styles.headerSection}>
                  <img
                    alt="Abstract colorful Innovation icon"
                    className={styles.icon}
                    src="/icon/trustDelfyle5.png"
                  />
                  <span className={styles.headerText}>Innovation</span>
                </div>
                <h1 className={styles.title}>Digital-First Approach</h1>
                <p className={styles.description}>
                  Leveraging technology for efficient service delivery.
                </p>
                <Button text="Something" type="smallWhatWeDoButton" />
              </section>
            </div>
          </div>

          <div
            ref={container6Ref}
            className={`${styles.innerContainerParent} ${styles.innerContainerParentBorderOrange}`}
          >
            <div className={styles.innerContainer}>
              <section className={styles.contentSection}>
                <div className={styles.headerSection}>
                  <img
                    alt="Abstract colorful Support icon"
                    className={styles.icon}
                    src="/icon/trustDelfyle6.png"
                  />
                  <span className={styles.headerText}>Support</span>
                </div>
                <h1 className={styles.title}>24/7 Assistance</h1>
                <p className={styles.description}>
                  Round-the-clock support for all your business needs.
                </p>
                <Button text="Something" type="smallWhatWeDoButton" />
              </section>
            </div>
          </div>

          <div
            ref={container5ExitRef}
            style={{ height: "1px", marginTop: "200px" }}
          />
        </div>

        <div className={styles.rightColumn}>
          <div
            className={`${styles.lottieContainer} ${
              isVisible ? styles.visible : ""
            }`}
          >
            <img
              src={containerImageUrls[displayedIdx]}
              alt={`Trust Delfyle Image ${displayedIdx + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: fade ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustDelfyle;
