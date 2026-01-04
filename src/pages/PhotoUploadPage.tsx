import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Upload, X, ArrowLeft, Camera, Image as ImageIcon, CheckCircle } from 'lucide-react';
import Silk from '../components/ui/Silk';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.4, ease: "easeOut" as const }
};

const slideInFromLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.4, ease: "easeOut" as const }
};

const slideInFromRight = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.4, ease: "easeOut" as const }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.4, ease: "easeOut" as const }
};

const PhotoUploadPage: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploaded, setIsUploaded] = useState(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setSelectedFiles(files);
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) return;
    
    setIsUploading(true);
    setUploadProgress(0);
    
    // Simulate upload progress
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(resolve => setTimeout(resolve, 100));
      setUploadProgress(i);
    }
    
    setIsUploading(false);
    setIsUploaded(true);
  };

  const resetUpload = () => {
    setSelectedFiles([]);
    setIsUploaded(false);
    setUploadProgress(0);
  };

  if (isUploaded) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 360, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
          </motion.div>
          <motion.h2 
            className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
            {...slideInFromLeft}
            transition={{ delay: 0.2 }}
          >
            Photos Uploaded Successfully!
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 mb-6"
            {...slideInFromRight}
            transition={{ delay: 0.3 }}
          >
            Thank you for sharing your memories with us. Your photos have been received and will be reviewed.
          </motion.p>
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={resetUpload}
              className="bg-af-blue hover:bg-af-light text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Upload More Photos
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to="/alumni"
                className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Back to Alumni
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden mb-32">
        {/* Silk Background */}
        <div className="absolute inset-0 z-0">
          <Silk
            speed={3}
            scale={1.5}
            color="#1a365d"
            noiseIntensity={1.2}
            rotation={0}
            fullScreen={false}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center pt-32">
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.1 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Camera className="w-20 h-20 mx-auto mb-6 text-af-gold" />
            </motion.div>
            <motion.h1 
              className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 drop-shadow-lg"
              {...slideInFromLeft}
              transition={{ delay: 0.2 }}
            >
              Upload Your <span className="text-af-gold">Photos</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8 drop-shadow"
              {...slideInFromRight}
              transition={{ delay: 0.3 }}
            >
              Share your precious moments with our school community. Upload your photos for the gallery.
            </motion.p>
            <motion.div 
              className="w-32 h-1 bg-af-gold mx-auto mt-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </motion.div>
          <motion.div
            {...slideInFromLeft}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <Link
              to="/alumni"
              className="inline-flex items-center gap-2 text-af-blue dark:text-af-light hover:text-af-gold transition-colors font-medium"
            >
              <motion.div
                whileHover={{ 
                  x: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <ArrowLeft size={20} />
              </motion.div>
              Back to Alumni Page
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Upload Section */}
      <motion.section 
        className="container mx-auto px-4 pb-32"
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...scaleIn}
            transition={{ delay: 0.7 }}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.3 }
            }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12"
          >
            <form className="space-y-8">
              {/* Upload Area */}
              <motion.div
                {...fadeIn}
                transition={{ delay: 0.8 }}
              >
                <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Upload className="w-6 h-6 text-af-blue" />
                  </motion.div>
                  Photo Upload
                </h2>
                <motion.div 
                  className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-8 text-center"
                  whileHover={{ 
                    borderColor: ['#1a365d', '#2563eb', '#1a365d'],
                    transition: { duration: 0.5 }
                  }}
                >
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ImageIcon className="w-12 h-12 text-gray-400 mb-4 mx-auto" />
                      <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">
                        Click to browse or drag and drop your photos here
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        Supported formats: JPG, PNG, GIF (Max 10MB per file)
                      </p>
                    </motion.div>
                  </label>
                </motion.div>

                {/* Selected Files */}
                {selectedFiles.length > 0 && (
                  <motion.div
                    {...slideInFromRight}
                    transition={{ delay: 0.9 }}
                    className="mt-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Selected Files</h3>
                    <div className="space-y-3">
                      {selectedFiles.map((file, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                          className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
                        >
                          <div className="flex items-center gap-3">
                            <ImageIcon className="w-8 h-8 text-af-blue" />
                            <div>
                              <p className="text-sm font-medium text-gray-900 dark:text-white">{file.name}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700 p-2 rounded-lg transition-colors"
                          >
                            <X size={16} />
                          </motion.button>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Upload Progress */}
                {isUploading && (
                  <motion.div
                    {...fadeIn}
                    transition={{ delay: 0.2 }}
                    className="mt-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Uploading...</h3>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                      <motion.div
                        className="h-full bg-af-blue rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${uploadProgress}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                      {uploadProgress}% Complete
                    </p>
                  </motion.div>
                )}

                {/* Upload Button */}
                <motion.div
                  {...fadeIn}
                  transition={{ delay: selectedFiles.length > 0 ? 1.0 : 1.1 }}
                  className="flex flex-col sm:flex-row gap-4 pt-6"
                >
                  <motion.button
                    type="button"
                    onClick={handleUpload}
                    disabled={isUploading || selectedFiles.length === 0}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                    className="flex-1 bg-af-blue hover:bg-af-light text-white px-8 py-4 rounded-lg font-bold transition duration-300 uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  >
                    {isUploading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent animate-spin rounded-full"></div>
                        Uploading...
                      </div>
                    ) : 'Upload Photos'}
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={resetUpload}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                    className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-8 py-4 rounded-lg font-bold transition duration-300 uppercase tracking-widest"
                  >
                    Clear All
                  </motion.button>
                </motion.div>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default PhotoUploadPage;
