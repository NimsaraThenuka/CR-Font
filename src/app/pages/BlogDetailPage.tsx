import { motion } from 'motion/react';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export function BlogDetailPage() {
  const { id } = useParams();

  const blogContent: Record<string, any> = {
    '1': {
      title: 'The Timeless Beauty and Rich History of Sri Lankan Gems',
      date: 'January 15, 2026',
      readTime: '8 min read',
      category: 'Heritage',
      image: 'https://images.unsplash.com/photo-1742240439165-60790db1ee93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkaWFtb25kJTIwcmluZ3xlbnwxfHx8fDE3Njk1OTIzNjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      content: `
        <p>Sri Lanka, a tropical island in the Indian Ocean, has long been celebrated for its stunning natural beauty, and one of its most prized treasures is its gems. Known as the "Island of Gems," Sri Lanka has a rich and ancient history of gemstone mining, dating back thousands of years.</p>

        <p>The island's gem-rich soils have given birth to some of the world's most prized and rare gemstones, including Ceylon sapphires, rubies, emeralds, and garnets. In this article, we take you on a journey through the fascinating history of Sri Lankan gems, highlighting their cultural significance, global appeal, and lasting legacy.</p>

        <h2>The Birth of Sri Lanka's Gem Industry</h2>

        <p>The history of gemstone mining in Sri Lanka dates back over 2,000 years. Ancient records, including Pali texts and Sanskrit scriptures, mention Sri Lanka's rich deposits of gemstones. The island was renowned for its gems as early as the 3rd century BC, and traders from all over the world traveled to Sri Lanka to acquire its precious stones.</p>

        <p>One of the earliest mentions of Sri Lankan gems can be found in the Mahavamsa, an ancient Sri Lankan chronicle, which states that King Solomon of Israel received magnificent gemstones as gifts from the island. The importance of these gems, both as luxury items and spiritual symbols, was already being recognized during this time.</p>

        <h2>The Gemstones of Sri Lanka</h2>

        <p>Sri Lanka's geology is incredibly unique, creating ideal conditions for the formation of precious and semi-precious gems. The island's gem-rich deposits are found in the central highlands and along the riverbeds. The gems found here are renowned for their exceptional clarity, rich colors, and extraordinary sizes.</p>

        <h3>Ceylon Sapphires</h3>

        <p>The Ceylon sapphire is perhaps Sri Lanka's most famous gemstone. These sapphires, renowned for their brilliant blue hue, have been sought after by royalty and collectors alike. Sri Lanka is home to some of the finest sapphires in the world, and they are prized for their pure, rich blue tones. Ceylon sapphires are not limited to blue—they also come in shades of yellow, pink, green, and orange, making them a versatile and highly sought-after gemstone.</p>

        <h3>Rubies</h3>

        <p>Sri Lanka is also famous for its rubies, particularly the Sri Lankan rubies, which are known for their deep, vibrant red color and excellent clarity. These rubies are prized not only for their aesthetic appeal but also for their rarity and historical significance. They have been used in royal jewelry for centuries and remain highly coveted in the luxury jewelry market.</p>

        <h3>Other Precious Stones</h3>

        <p>In addition to sapphires and rubies, Sri Lanka produces an impressive range of other precious and semi-precious gems. The island is known for garnets, tourmaline, aquamarine, emeralds, and topaz, as well as lesser-known stones like zircon and moonstone. Each gemstone has its own unique characteristics, with colors that range from the deep reds of rubies to the rich greens of emeralds, and the striking blues of aquamarine.</p>

        <h2>The Role of Sri Lankan Gems in Global Trade</h2>

        <p>Sri Lanka's gem trade flourished through the ages, thanks to its strategic location along the ancient trade routes between East and West. Merchants from Persia, India, China, and later Europe would travel to the island to trade not only in gems but also in spices, silks, and other luxury goods. The city of Colombo became an important hub for gem traders, and by the 17th and 18th centuries, Sri Lanka had established itself as one of the world's foremost suppliers of precious stones.</p>

        <p>During the British colonial period, Sri Lanka's gem industry continued to thrive. The British began mining and exporting gems, particularly sapphires, to Europe, where they became a favorite of European royalty. The famous Star of India, a massive Ceylon sapphire, is perhaps one of the most famous examples of Sri Lankan gems making their way into the royal collections of the West.</p>

        <h2>Modern-Day Sri Lanka: A Global Gem Hub</h2>

        <p>Today, Sri Lanka remains one of the world's top producers of precious gems. The island's gem mining industry is as vibrant as ever, with both traditional mining methods and modern technology being used to extract these treasures from the earth. The gem market is carefully regulated to ensure that the gems remain authentic and that ethical mining practices are followed.</p>

        <p>Sri Lanka's gem industry is now centered in the town of Ratnapura, often called the "City of Gems." Here, miners continue to search for precious stones, and it's not uncommon to find a world-renowned gem dealer setting up shop to sell Sri Lanka's treasures to buyers from around the globe.</p>

        <h2>The Cultural Significance of Gems in Sri Lanka</h2>

        <p>Sri Lankan gems have long held a special place in the culture of the island. Historically, they were often seen as a gift from the gods, imbued with mystical powers. Many Sri Lankans believe that certain gems, like the blue sapphire, bring good fortune and prosperity to their owners.</p>

        <p>Gems are also associated with the Sri Lankan Buddhist tradition, with the Sapphire Buddha believed to have been a sacred and revered object. The symbolism of gems and the spiritual beliefs associated with them continue to influence the gem trade and the ways in which gems are perceived.</p>

        <h2>Conclusion: The Legacy of Sri Lankan Gems</h2>

        <p>The history of Sri Lankan gems is a captivating tale of ancient traditions, royal connections, and a lasting legacy that has shaped the world's gemstone trade for centuries. From the ancient civilizations to modern-day collectors and luxury jewelers, the appeal of Sri Lanka's gemstones has never waned. Today, these precious stones continue to mesmerize the world, with their beauty, rarity, and timeless elegance.</p>

        <p>Whether you're a gem enthusiast, a jewelry connoisseur, or simply someone looking to own a piece of nature's finest beauty, Sri Lanka's gemstones offer a treasure trove of opportunities. As you wear or admire a Ceylon sapphire, Sri Lankan ruby, or any of the island's other prized gems, you're holding a piece of history, luxury, and heritage that has been cherished for millennia.</p>
      `,
    },
    '2': {
      title: 'How to Choose the Perfect Gemstone for Your Jewelry',
      date: 'January 10, 2026',
      readTime: '6 min read',
      category: 'Guide',
      image: 'https://images.unsplash.com/photo-1583937443351-f2f669fbe2cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBlbWVyYWxkJTIwbmVja2xhY2V8ZW58MXx8fHwxNzY5NjA0MDI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      content: `
        <p>Selecting the perfect gemstone for your jewelry is a thrilling and personal journey. Whether you're looking for a timeless engagement ring, a standout necklace, or an exquisite bracelet, choosing the right gemstone can elevate your jewelry piece to an entirely new level of beauty and significance.</p>

        <p>At Chrish Royal, we understand the importance of finding the perfect stone, and we're here to guide you through the key factors to consider when making your selection: color, clarity, cut, and carat.</p>

        <h2>1. Color: The Heart of the Gemstone</h2>

        <p>The color of a gemstone is its most prominent and important characteristic. Color not only affects the stone's appearance but also determines its value. Each gemstone has a distinct color profile, and finding the right hue for your jewelry is crucial.</p>

        <p>For example:</p>
        <ul>
          <li><strong>Sapphires</strong> are best known for their stunning blue hues, but they can also be found in a variety of colors, including yellow, pink, and green. The more vibrant and intense the color, the more valuable the sapphire.</li>
          <li><strong>Rubies</strong> are prized for their deep red to burgundy shades, with the most sought-after rubies exhibiting a rich, velvety color often referred to as "pigeon's blood" red.</li>
          <li><strong>Emeralds</strong> are famous for their vibrant green color, and the finest emeralds exhibit a deep green hue with a bluish tint.</li>
        </ul>

        <p>When choosing a gemstone, consider the color that resonates with you or the person you're gifting the jewelry to. You may also want to think about how the gemstone's color complements your skin tone, outfit, or the overall aesthetic of the jewelry piece.</p>

        <h2>2. Clarity: How to Spot a Flawless Gemstone</h2>

        <p>Clarity refers to the presence of inclusions (internal imperfections) or blemishes (external imperfections) in a gemstone. While minor imperfections are common, the fewer the inclusions or blemishes, the more valuable the gemstone.</p>

        <ul>
          <li><strong>Diamonds</strong> are graded on a scale from Flawless (FL) to Included (I), with Flawless diamonds being the rarest and most valuable.</li>
          <li>For <strong>sapphires, rubies, and emeralds</strong>, inclusions are often less visible to the naked eye, but they can affect the clarity grade. Some inclusions are even accepted as a part of the stone's character, especially for gemstones like emeralds, which may have natural inclusions known as "jardin" (French for "garden").</li>
        </ul>

        <p>When purchasing gemstones, it's important to assess the clarity carefully. However, remember that some gemstones, like emeralds, have natural inclusions that are accepted and may not diminish their overall beauty or value.</p>

        <h2>3. Cut: The Art of Sparkle and Symmetry</h2>

        <p>The cut of a gemstone plays a significant role in its overall appearance. A gemstone's cut determines how it reflects light, affecting its brilliance and overall appeal. While diamonds are traditionally cut into various shapes (round, princess, cushion), other gemstones such as sapphires, rubies, and emeralds also have specific cuts that enhance their beauty.</p>

        <p>Here are the factors to consider for the cut:</p>
        <ul>
          <li><strong>Shape:</strong> The shape of the gemstone (round, oval, pear, etc.) should match the design of your jewelry and your personal preference.</li>
          <li><strong>Symmetry:</strong> A well-cut gemstone will have equal proportions, which is important for maximizing its brilliance.</li>
          <li><strong>Facets:</strong> The number and quality of facets on the gemstone contribute to how well it reflects light. The more facets, the more light it can capture, enhancing its sparkle.</li>
        </ul>

        <p>An expertly cut gemstone will show off its natural beauty and brilliance, making it the focal point of your jewelry. Make sure to choose a cut that enhances the stone's color and clarity while adding radiance.</p>

        <h2>4. Carat: Size Matters</h2>

        <p>The carat of a gemstone refers to its weight, and by extension, its size. Larger gemstones are rarer and tend to be more expensive, but the carat weight should not be the only factor in choosing a gemstone. A smaller gemstone with a higher quality cut, color, and clarity can be more valuable than a larger gemstone with poor characteristics.</p>

        <ul>
          <li><strong>Diamonds:</strong> A 1-carat diamond is a popular size for engagement rings, but larger stones like 2-carat diamonds are considered even more valuable due to their rarity.</li>
          <li><strong>Sapphires and rubies:</strong> Larger stones, especially those with deep, vibrant colors, are highly sought after and can command a premium price.</li>
        </ul>

        <p>When selecting a gemstone, consider both the size and how it will look in the context of the jewelry piece. A large, flawless gemstone can make a bold statement, while a smaller, more intricate stone can add elegance and sophistication to a design.</p>

        <h2>Conclusion: Finding Your Perfect Gemstone</h2>

        <p>Choosing the perfect gemstone for your jewelry is about finding the balance between color, clarity, cut, and carat—all while keeping in mind your personal taste and style. Whether you are purchasing a gemstone for an engagement ring, a special gift, or an investment, take your time to carefully consider these key factors.</p>

        <p>At Chrish Royal, we offer a curated selection of high-quality gemstones that are perfect for every occasion, providing you with pieces that will not only dazzle but also stand the test of time.</p>

        <p>Remember, the perfect gemstone is one that speaks to you—not only through its beauty but also through its meaning and significance in your life. Happy gemstone shopping!</p>
      `,
    },
    '3': {
      title: 'The Art of Gemstone Cutting and Crafting Fine Jewelry',
      date: 'January 5, 2026',
      readTime: '7 min read',
      category: 'Craftsmanship',
      image: 'https://images.unsplash.com/photo-1767921482419-d2d255b5b700?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnZW1zdG9uZSUyMGpld2Vscnl8ZW58MXx8fHwxNzY5NjA0MDI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      content: `
        <p>At Chrish Royal, we believe that the true beauty of a gemstone is revealed not just through its raw form, but through the artistic process of cutting, polishing, and crafting. The journey from a rough gemstone to a stunning piece of fine jewelry is an intricate and highly skilled process, requiring both technical expertise and artistic vision.</p>

        <p>In this blog, we take you behind the scenes to explore the fascinating art of gemstone cutting and how expert craftsmanship transforms rough stones into exquisite works of jewelry.</p>

        <h2>The Beginning: From Rough Gemstone to a Beautiful Creation</h2>

        <p>Every fine piece of jewelry begins with a rough gemstone, mined from the earth's core, sometimes over millions of years. These natural treasures, while beautiful, often lack the brilliance and symmetry that make them truly spectacular. That's where the cutting and polishing process comes in, guided by skilled artisans who work with an artist's eye and a craftsman's precision.</p>

        <h2>1. The Importance of the Right Cut</h2>

        <p>The cut of a gemstone refers to how well the gem is shaped and faceted. Unlike diamonds, which are cut to maximize brilliance and sparkle, gemstones like sapphires, rubies, and emeralds have unique cutting techniques that enhance their natural beauty while maintaining their inherent qualities.</p>

        <p>When cutting gemstones, jewelers carefully consider:</p>
        <ul>
          <li><strong>The Shape:</strong> Whether round, oval, square, pear, or any other shape, the cut must highlight the gemstone's most vibrant features. Each gemstone has its optimal shape based on its natural form.</li>
          <li><strong>Facets:</strong> The facets are the flat surfaces that are cut into the gemstone. The number and angles of these facets determine how light interacts with the gem, which in turn impacts its sparkle and brilliance.</li>
          <li><strong>Proportions:</strong> Ensuring the gemstone is cut to the right proportions is critical to maintaining its natural balance and beauty. Even a small miscalculation in proportions can lead to a loss in the gemstone's visual appeal.</li>
        </ul>

        <p>Gemstones like sapphires and rubies are often cut in cushion, emerald, or oval shapes, whereas emeralds are typically cut in a rectangular or square emerald cut, designed to minimize the risk of breakage due to their natural inclusions.</p>

        <h2>2. Cutting the Gemstone: Precision and Patience</h2>

        <p>Once the optimal cut is chosen, the process of shaping the gemstone begins. The cutting of gemstones requires great patience and precision. Traditionally, this process is carried out using tools like diamond-tipped saws, lapidary wheels, and polishing tools. Modern technology has made the process more efficient, but the hand of the artisan is still essential to ensure that the gemstone is cut to perfection.</p>

        <p>The cutting process can take several hours to days, depending on the size, complexity, and type of gemstone. During this time, the artisan evaluates every facet, working meticulously to enhance the stone's natural color and brilliance while preserving its structural integrity.</p>

        <h2>3. Polishing: Enhancing Brilliance</h2>

        <p>After the gemstone is cut into its desired shape and facets are carefully crafted, the next crucial step is polishing. Polishing brings out the gemstone's luster and sparkle, transforming a matte stone into a gleaming jewel. This step is what truly elevates a gemstone from a rough, dull stone to a sparkling masterpiece.</p>

        <p>The polishing process typically involves rubbing the gemstone against a specially designed polishing wheel coated with a fine abrasive compound. The gemstone is polished under controlled conditions, ensuring every facet catches light and reflects it beautifully. For stones like emeralds or rubies, this process must be carried out delicately to avoid altering the stone's natural characteristics.</p>

        <h2>From Gemstone to Jewelry: The Crafting of Fine Jewelry</h2>

        <p>Once the gemstone is polished to perfection, it is ready to be set into a piece of jewelry. This is where the second phase of artistry begins—the crafting of fine jewelry. The process of creating a jewelry piece is an intricate one, where the expertise of goldsmiths, silversmiths, and designers comes into play.</p>

        <h2>4. Designing the Setting</h2>

        <p>The design of the setting plays a significant role in enhancing the beauty of the gemstone. Whether it's a classic solitaire ring, an intricate necklace, or an elegant bracelet, the setting must complement the gemstone and enhance its brilliance. Designers take into account the gemstone's color, size, and shape to create a setting that highlights the gem's natural beauty.</p>

        <p>Popular settings include:</p>
        <ul>
          <li><strong>Prong setting:</strong> This setting holds the gemstone with small metal prongs, allowing light to pass through the gem and maximizing its sparkle.</li>
          <li><strong>Bezel setting:</strong> The gemstone is encircled by metal, which provides extra security and highlights the stone's beauty, often used for emeralds or sapphires.</li>
          <li><strong>Halo setting:</strong> A ring of smaller stones surrounds the central gem, elevating the primary stone's visual impact.</li>
        </ul>

        <p>The design must also consider comfort, durability, and style. The choice of metal—platinum, gold, or silver—will complement the gemstone and the overall look of the jewelry piece.</p>

        <h2>5. Setting the Gemstone</h2>

        <p>The gemstone is carefully set into the jewelry, and this is where the craftsmanship truly shines. Jewelers use specialized tools to secure the gemstone in place, ensuring it fits perfectly within its setting. This step requires great skill and precision to prevent any damage to the gemstone while ensuring it is firmly held in place.</p>

        <p>Once the gemstone is set, the jewelry piece is inspected for alignment, symmetry, and security. The final touches are added, such as engraving, polishing, and final inspection, ensuring the piece is ready for wear or sale.</p>

        <h2>The Final Masterpiece</h2>

        <p>The end result is a stunning piece of jewelry that not only sparkles and dazzles but is also a testament to the expert craftsmanship that goes into every gemstone and jewelry creation. From the initial rough stone to the polished gem, and finally to the completed jewelry piece, each step of the process is crucial in bringing the stone to life in its most exquisite form.</p>

        <p>At Chrish Royal, we pride ourselves on offering a carefully curated selection of high-quality gemstones and expertly crafted jewelry that showcases both artistry and precision. Each piece we create is a testament to the skilled artisanship and timeless beauty of Sri Lanka's gem heritage.</p>

        <p>Whether you're looking for a Ceylon sapphire ring, an emerald pendant, or a ruby bracelet, the journey from gemstone to jewelry is a true work of art—a process of transformation that turns a simple stone into a lifelong treasure.</p>
      `,
    },
    '4': {
      title: 'Why Sri Lankan Gems Are Among the Most Coveted in the World',
      date: 'December 28, 2025',
      readTime: '5 min read',
      category: 'Excellence',
      image: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXlsb24lMjBzYXBwaGlyZSUyMGpld2VscnklMjBsdXh1cnl8ZW58MXx8fHwxNzY5NjA0MDI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      content: `
        <p>Sri Lanka, a small island in the Indian Ocean, has earned a global reputation as a treasure trove of the finest gemstones. For centuries, Sri Lankan gems have been coveted by royalty, collectors, and jewelry enthusiasts alike for their exceptional beauty, clarity, and historical significance.</p>

        <p>Known as the "Island of Gems," Sri Lanka continues to be a dominant player in the global gemstone industry, offering some of the most stunning and rare gemstones found anywhere in the world. But what exactly makes Sri Lankan gemstones so highly sought after? Let's explore the unique qualities that make these gems a symbol of luxury and allure.</p>

        <h2>1. Unmatched Clarity</h2>

        <p>One of the most remarkable qualities of Sri Lankan gemstones is their exceptional clarity. The island's gem-rich soils are known to produce stones with minimal internal flaws, making them stand out for their brilliance and transparency. Unlike many gemstones from other parts of the world, Sri Lankan gems often exhibit few inclusions or impurities, resulting in stones that are remarkably clean and pure.</p>

        <p>This natural clarity, particularly in Ceylon sapphires and rubies, allows the gems to reflect light in breathtaking ways, creating a vibrant sparkle that's hard to match. Whether it's a deep-blue sapphire or a fiery red ruby, the clarity of these gemstones ensures that they maintain their brilliance and beauty for years to come.</p>

        <h2>2. Brilliant Color Range</h2>

        <p>Sri Lankan gemstones are renowned for their stunning and vibrant color range. From the iconic Ceylon blue sapphires to the rich ruby reds, Sri Lanka's gem deposits produce stones in a wide array of beautiful hues that are treasured by jewelers worldwide.</p>

        <p>The Ceylon sapphire is particularly famous for its deep, rich blue color, often regarded as the most perfect shade of blue in the gemstone world. However, Sri Lanka is also home to sapphires in other striking colors, such as yellow, green, pink, and orange. These sapphires are not only known for their color but also for their consistency—they exhibit a more uniform tone compared to sapphires from other regions, making them particularly desirable for high-end jewelry.</p>

        <p>Similarly, Sri Lankan rubies are celebrated for their intense red color. The clarity and vividness of the ruby's red hue are often considered unparalleled, and their unique color saturation has made them a timeless favorite among gem collectors and investors.</p>

        <p>Beyond sapphires and rubies, Sri Lanka produces an assortment of other precious gems, including emeralds, garnets, and tourmaline, each with their own brilliant color palette. Whether you prefer the deep green of emeralds or the striking pink of tourmaline, Sri Lankan gemstones offer a stunning variety of colors to suit every taste.</p>

        <h2>3. Rich Historical Significance</h2>

        <p>Sri Lankan gemstones are not just admired for their physical beauty—they also hold great cultural and historical significance. The island has been a major source of gemstones for over 2,000 years, with references to its gem-rich nature appearing in ancient texts and historical accounts. Sri Lanka's gem history can be traced back to the time of the ancient Sinhalese kings, who were known to wear crowns adorned with precious gems as symbols of power and wealth.</p>

        <p>The island's gem mines were also famous in the ancient world, with merchants from India, Persia, and Rome regularly trading in Sri Lankan gems. These gems were not just valued for their beauty, but also for their perceived mystical and healing properties. Gemstones were believed to bring good fortune, protection, and spiritual enlightenment, making them valuable not only in jewelry but also in religious and ceremonial artifacts.</p>

        <p>Over the centuries, Sri Lankan gems have adorned the jewelry of monarchs and dignitaries across the globe, from the royalty of Europe to the Maharajas of India. Today, many of these historical gems continue to be displayed in museums and private collections, a testament to their lasting allure and prestige.</p>

        <h2>4. Ethical Sourcing and Quality Control</h2>

        <p>Another factor contributing to the desirability of Sri Lankan gemstones is the ethical sourcing and quality control that goes into every gem mined on the island. Unlike many other gemstone-producing regions, Sri Lanka places great emphasis on responsible mining practices that minimize environmental impact and ensure fair treatment of local communities.</p>

        <p>The country's gem industry is tightly regulated, with the government implementing stringent standards to protect the environment and preserve the quality of the gemstones. This commitment to sustainable and ethical sourcing ensures that every Sri Lankan gem upholds a high standard of integrity, making it an attractive choice for those seeking not only luxury but also transparency and accountability in their purchases.</p>

        <h2>5. Rarity and Exclusivity</h2>

        <p>Sri Lankan gemstones are also rare and highly exclusive. While the island has abundant gem deposits, the most exceptional stones are often unearthed after great effort and patience. As a result, high-quality Sri Lankan gems are rare finds, with only a small percentage of stones meeting the rigorous standards required for use in fine jewelry.</p>

        <p>This rarity, combined with the global reputation of Sri Lankan gemstones for quality, means that owning a piece of Ceylon sapphire or Sri Lankan ruby is a mark of distinction. Whether used in engagement rings, necklaces, or bracelets, these gemstones are a symbol of sophistication, exclusivity, and timeless elegance.</p>

        <h2>Conclusion: The Lasting Appeal of Sri Lankan Gems</h2>

        <p>The enduring appeal of Sri Lankan gems lies in their exceptional qualities—from their clarity and brilliance to their rich colors, historical significance, and rarity. These gemstones are not just prized for their beauty; they are cherished as symbols of luxury, history, and cultural heritage.</p>

        <p>Whether you are looking for an investment piece or simply want to indulge in the timeless beauty of Ceylon sapphires, rubies, or emeralds, Sri Lankan gemstones offer the perfect combination of natural magnificence, tradition, and prestige. When you choose a Sri Lankan gem, you're not just acquiring a beautiful stone—you're becoming a part of a centuries-old legacy of luxury, craftsmanship, and exclusivity.</p>

        <p>At Chrish Royal, we are proud to offer the finest Sri Lankan gemstones, each one carefully sourced and crafted into exquisite jewelry that will last for generations. Discover the unmatched beauty and allure of Sri Lankan gems with us today.</p>
      `,
    },
  };

  const blog = blogContent[id || '1'];

  if (!blog) {
    return <div className="min-h-screen pt-24 text-white text-center">Blog not found</div>;
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/journal">
          <motion.button
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-teal-300 hover:text-teal-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Journal</span>
          </motion.button>
        </Link>
      </div>

      {/* Hero Image */}
      <section className="relative py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-96 rounded-3xl overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a4f4d] via-transparent to-transparent" />
            
            {/* Category Badge */}
            <div className="absolute top-6 left-6">
              <span className="px-6 py-3 bg-teal-500 text-white rounded-full text-sm font-medium">
                {blog.category}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-serif text-teal-100 mb-6">
              {blog.title}
            </h1>

            <div className="flex items-center gap-6 text-teal-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{blog.readTime}</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="ml-auto flex items-center gap-2 text-teal-400 hover:text-teal-300"
              >
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-lg prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
            style={{
              color: '#e0f2f1',
            }}
          />
        </div>
      </article>

      {/* Related Articles CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-900/10 to-transparent" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-teal-100 mb-6">
              Explore More Stories
            </h2>
            <p className="text-teal-200 text-lg mb-8">
              Discover more insights about Sri Lankan gems and fine jewelry
            </p>
            <Link to="/journal">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-medium hover:from-teal-600 hover:to-teal-700 transition-all"
              >
                View All Articles
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
