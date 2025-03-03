import { Button } from '@components/ui/button';
import Link from 'next/link';

const AboutPage = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="container">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-center">
                        About AutoVerse
                    </h1>

                    <div className="prose prose-lg max-w-none">
                        <p className="lead">
                            AutoVerse is a premier automotive blog dedicated to bringing you the latest news, in-depth reviews, and insightful perspectives from the world of cars and motorcycles.
                        </p>

                        <h2>Our Mission</h2>
                        <p>
                            At AutoVerse, we believe that automotive content should be accessible, informative, and inspiring. Our mission is to create a platform where enthusiasts and casual readers alike can explore the fascinating world of automobiles through thoughtful writing and stunning visuals.
                        </p>

                        <h2>Our Team</h2>
                        <p>
                            Our team consists of passionate automotive journalists, photographers, and industry experts who bring diverse perspectives and specialized knowledge to our content. With backgrounds ranging from mechanical engineering to professional racing, our contributors offer unique insights that go beyond surface-level reporting.
                        </p>

                        <h2>Our Content</h2>
                        <p>
                            We cover a wide range of topics including:
                        </p>
                        <ul>
                            <li>New vehicle reviews and comparisons</li>
                            <li>Emerging automotive technologies</li>
                            <li>Classic car restoration and appreciation</li>
                            <li>Motorsports coverage and analysis</li>
                            <li>Automotive photography and design</li>
                            <li>Industry news and market trends</li>
                        </ul>

                        <h2>Our Approach</h2>
                        <p>
                            We pride ourselves on delivering content that is:
                        </p>
                        <ul>
                            <li><strong>Authentic:</strong> Our opinions are honest and unbiased.</li>
                            <li><strong>Informative:</strong> We provide context and depth beyond basic specifications.</li>
                            <li><strong>Engaging:</strong> Our content is designed to be enjoyable for both dedicated enthusiasts and casual readers.</li>
                            <li><strong>Visually compelling:</strong> We believe that automotive content should be as beautiful as the vehicles themselves.</li>
                        </ul>

                        <h2>Connect With Us</h2>
                        <p>
                            We love hearing from our readers! Whether you have a question, suggestion, or just want to share your thoughts, don&#39;t hesitate to get in touch.
                        </p>
                    </div>

                    <div className="mt-10 text-center">
                        <Button asChild className="rounded-full">
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
