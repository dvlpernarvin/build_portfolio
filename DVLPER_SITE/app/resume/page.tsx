'use client';
import Button from '@/components/Button';
import TransitionLink from '@/components/TransitionLink';
import { GENERAL_INFO } from '@/lib/data';
import { ArrowLeft } from 'lucide-react';
import React from 'react';
import dynamic from 'next/dynamic';

// PDFViewer ko sirf client-side pe render karo
const PDFViewer = dynamic(() => import('./PDFViewer'), { ssr: false });

const ResumePage = () => {
    return (
        <section className="pt-5 pb-14">
            <div className="container">
                <TransitionLink
                    back
                    href="/"
                    className="mb-16 inline-flex gap-2 items-center group h-12">
                    <ArrowLeft className="group-hover:-translate-x-1 group-hover:text-primary transition-all duration-300" />
                    Back
                </TransitionLink>
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <h1 className="text-4xl font-anton text-center md:text-left w-full">My Resume</h1>
                    <Button
                        as="link"
                        href={GENERAL_INFO.resume}
                        variant="primary"
                        className="mt-4 md:mt-0"
                        download>
                        Download
                    </Button>
                </div>
                <div className="flex justify-center">
                    <div className="shadow-lg rounded-lg overflow-hidden bg-white">
                        <PDFViewer file={GENERAL_INFO.resume} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResumePage;