import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { galleryItems, GalleryItem } from "@/data/galleryData";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const [currentTab, setCurrentTab] = useState("all");
  const [itemsToShow, setItemsToShow] = useState(15);
  const [shuffledItems, setShuffledItems] = useState<GalleryItem[]>([]);

  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array: GalleryItem[]): GalleryItem[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Shuffle items on component mount
  useEffect(() => {
    setShuffledItems(shuffleArray(galleryItems));
  }, []);

  const openImageDialog = (image: string, title: string) => {
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  const closeImageDialog = () => {
    setSelectedImage(null);
    setSelectedTitle(null);
  };

  const handleShowMore = () => {
    setItemsToShow(prev => prev + 15);
  };

  // Reset items to show when changing tabs
  const handleTabChange = (value: string) => {
    setCurrentTab(value);
    setItemsToShow(15);
  };

  // Get filtered items based on the current tab
  const getFilteredItems = (category: string) => {
    if (category === "all") {
      return shuffledItems;
    }
    return shuffledItems.filter(item => item.category === category);
  };

  // Calculate if there are more items to show
  const hasMoreItems = (category: string) => {
    const filteredItems = getFilteredItems(category);
    return filteredItems.length > itemsToShow;
  };

  // Get items to display based on the current limit
  const getItemsToDisplay = (category: string) => {
    const filteredItems = getFilteredItems(category);
    return filteredItems.slice(0, itemsToShow);
  };

  // Render gallery items
  const renderGalleryItems = (items: GalleryItem[]) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="overflow-hidden rounded-lg shadow-md cursor-pointer group bg-white"
            onClick={() => openImageDialog(item.image, item.title)}
          >
            <div className="relative aspect-square">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-furniture-gray/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="gallery" className="section-padding bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-amiri text-3xl md:text-4xl mb-4 text-furniture-gray">
            <span className="text-furniture-gold font-bold">معرض</span> أعمالنا
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 text-furniture-gray">
            نحن لا نتحدث فقط عن الجودة، بل نعرضها لكم بوضوح. 
            تصفح معرض الصور، واستلهم أفكارك القادمة.
          </p>
          
          <Tabs 
            defaultValue="all" 
            className="w-full max-w-4xl mx-auto"
            value={currentTab}
            onValueChange={handleTabChange}
          >
            {/* Improved mobile display */}
            <div className="overflow-x-auto pb-2">
              <TabsList className="flex w-full min-w-max border-b border-furniture-beige/20 bg-transparent">
                <TabsTrigger 
                  value="all" 
                  className="flex-1 text-base rounded-t-lg rounded-b-none border-b-2 border-transparent text-furniture-gray data-[state=active]:border-furniture-gold data-[state=active]:text-furniture-gold data-[state=active]:bg-transparent"
                >
                  الكل
                </TabsTrigger>
                <TabsTrigger 
                  value="curtains" 
                  className="flex-1 text-base rounded-t-lg rounded-b-none border-b-2 border-transparent text-furniture-gray data-[state=active]:border-furniture-gold data-[state=active]:text-furniture-gold data-[state=active]:bg-transparent"
                >
                  ستائر
                </TabsTrigger>
                <TabsTrigger 
                  value="majlis" 
                  className="flex-1 text-base rounded-t-lg rounded-b-none border-b-2 border-transparent text-furniture-gray data-[state=active]:border-furniture-gold data-[state=active]:text-furniture-gold data-[state=active]:bg-transparent"
                >
                  مجالس
                </TabsTrigger>
                <TabsTrigger 
                  value="modern" 
                  className="flex-1 text-base rounded-t-lg rounded-b-none border-b-2 border-transparent text-furniture-gray data-[state=active]:border-furniture-gold data-[state=active]:text-furniture-gold data-[state=active]:bg-transparent"
                >
                  مودرن
                </TabsTrigger>
                <TabsTrigger 
                  value="classic" 
                  className="flex-1 text-base rounded-t-lg rounded-b-none border-b-2 border-transparent text-furniture-gray data-[state=active]:border-furniture-gold data-[state=active]:text-furniture-gold data-[state=active]:bg-transparent"
                >
                  كلاسيك
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-8">
              {renderGalleryItems(getItemsToDisplay("all"))}
              
              {hasMoreItems("all") && (
                <div className="flex justify-center mt-10">
                  <Button 
                    className="bg-furniture-gold hover:bg-furniture-darkGold text-white"
                    onClick={handleShowMore}
                  >
                    عرض المزيد
                  </Button>
                </div>
              )}
              
              {getFilteredItems("all").length === 0 && (
                <div className="text-center py-10">
                  <p className="text-furniture-gray text-lg">لا توجد عناصر متاحة.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="curtains" className="mt-8">
              {renderGalleryItems(getItemsToDisplay("curtains"))}
              
              {hasMoreItems("curtains") && (
                <div className="flex justify-center mt-10">
                  <Button 
                    className="bg-furniture-gold hover:bg-furniture-darkGold text-white"
                    onClick={handleShowMore}
                  >
                    عرض المزيد
                  </Button>
                </div>
              )}
              
              {getFilteredItems("curtains").length === 0 && (
                <div className="text-center py-10">
                  <p className="text-furniture-gray text-lg">لا توجد عناصر في هذه الفئة حاليًا.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="majlis" className="mt-8">
              {renderGalleryItems(getItemsToDisplay("majlis"))}
              
              {hasMoreItems("majlis") && (
                <div className="flex justify-center mt-10">
                  <Button 
                    className="bg-furniture-gold hover:bg-furniture-darkGold text-white"
                    onClick={handleShowMore}
                  >
                    عرض المزيد
                  </Button>
                </div>
              )}
              
              {getFilteredItems("majlis").length === 0 && (
                <div className="text-center py-10">
                  <p className="text-furniture-gray text-lg">لا توجد عناصر في هذه الفئة حاليًا.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="modern" className="mt-8">
              {renderGalleryItems(getItemsToDisplay("modern"))}
              
              {hasMoreItems("modern") && (
                <div className="flex justify-center mt-10">
                  <Button 
                    className="bg-furniture-gold hover:bg-furniture-darkGold text-white"
                    onClick={handleShowMore}
                  >
                    عرض المزيد
                  </Button>
                </div>
              )}
              
              {getFilteredItems("modern").length === 0 && (
                <div className="text-center py-10">
                  <p className="text-furniture-gray text-lg">لا توجد عناصر في هذه الفئة حاليًا.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="classic" className="mt-8">
              {renderGalleryItems(getItemsToDisplay("classic"))}
              
              {hasMoreItems("classic") && (
                <div className="flex justify-center mt-10">
                  <Button 
                    className="bg-furniture-gold hover:bg-furniture-darkGold text-white"
                    onClick={handleShowMore}
                  >
                    عرض المزيد
                  </Button>
                </div>
              )}
              
              {getFilteredItems("classic").length === 0 && (
                <div className="text-center py-10">
                  <p className="text-furniture-gray text-lg">لا توجد عناصر في هذه الفئة حاليًا.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Dialog open={!!selectedImage} onOpenChange={closeImageDialog}>
        <DialogContent className="max-w-4xl p-6 overflow-hidden">
          <DialogTitle className="text-xl font-bold text-furniture-gray">{selectedTitle || "معاينة الصورة"}</DialogTitle>
          <div className="flex justify-center items-center h-[60vh]">
            <img 
              src={selectedImage || ""} 
              alt={selectedTitle || "معاينة الصورة"} 
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
