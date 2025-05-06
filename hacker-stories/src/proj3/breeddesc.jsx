import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const descriptions = {
  'shiba-inu': `The Shiba Inu is known for its bold spirit and loyalty. Originally bred for hunting in Japan, this compact and agile breed is fiercely independent and always alert.

  Shibas are intelligent and strong-willed, often displaying a stubborn streak, but they are also deeply affectionate with those they trust. Their expressive eyes, upright ears, and fox-like appearance make them especially captivating. Though they can be aloof with strangers, they are incredibly devoted companions, thriving in environments where they can stay active and mentally stimulated.

  Shiba Inus generally have a lifespan of 12 to 15 years, making them a relatively long-lived breed. With proper nutrition, regular exercise, and routine veterinary care, they can remain active and healthy well into old age. Their independent nature often keeps them mentally sharp, and they usually enjoy outdoor activities, making them great companions for active households.

  Despite their overall good health, Shibas can be prone to certain hereditary conditions. Some of the most common include hip dysplasia, patellar luxation (a kneecap issue), and various eye disorders such as glaucoma or progressive retinal atrophy. Skin allergies and sensitivities are also somewhat common in the breed. Regular check-ups and early screenings can help identify these issues early and support a better quality of life.`,

  'corgi': `The Pembroke Welsh Corgi is known for its playful personality, intelligence, and affectionate nature. Originally bred as a herding dog in Wales, this short-legged yet sturdy breed is highly energetic and thrives on mental stimulation and activity. Corgis are loyal companions that form strong bonds with their families, and their expressive faces and signature “smile” make them especially charming. Despite their small size, they carry a bold and confident attitude.

  Corgis typically live between 12 to 14 years, making them a great long-term addition to any home. They enjoy staying active and benefit from daily walks and interactive play. Thanks to their herding instincts, they may try to “herd” children or other pets, so early training and socialization are important. Their outgoing and alert temperament also makes them excellent watchdogs.

  Like many purebred dogs, Corgis are prone to specific health issues. Common concerns include hip dysplasia, degenerative myelopathy (a progressive spinal cord condition), and intervertebral disc disease due to their long backs. They may also be at risk for obesity, which can worsen joint and back problems, so weight management is key. Regular vet visits, a healthy diet, and consistent exercise can help reduce the risk of these conditions and support a long, healthy life.`,

  'labrador': `Labradors are famously friendly, outgoing, and eager to please, making them one of the most popular family dogs worldwide. Originally bred as retrievers, they are intelligent and highly trainable, often excelling in obedience, service roles, and agility. Labs are great with children and other pets, and their even temperament makes them ideal companions for both new and experienced dog owners.

  Labradors typically live between 10 to 12 years. They are active dogs that thrive on regular exercise and mental stimulation. Without enough activity, they may become bored or gain weight, so consistent walks, games, and tasks are essential to their well-being.
  
  While generally healthy, Labradors are prone to certain conditions such as hip and elbow dysplasia, progressive retinal atrophy, and heart issues. They are also known for having a big appetite, which can lead to obesity if not properly managed. Regular vet visits and a controlled diet are key to keeping them in optimal health.`,
  
  'beagle': `Beagles are curious, playful, and full of energy. Originally bred for hunting due to their excellent sense of smell, they are now beloved for their gentle nature and sociable temperament. Beagles do well in families and enjoy the company of children and other pets. However, their strong nose can make them wanderers, so secure spaces are a must.

  Beagles generally live 12 to 15 years and stay youthful well into adulthood. They require moderate daily exercise to stay healthy and happy. Their love for sniffing and exploring makes walks especially enjoyable if given the time to investigate their surroundings.

  Health-wise, Beagles are prone to ear infections, hypothyroidism, epilepsy, and intervertebral disc disease. Their floppy ears can trap moisture and debris, so regular cleaning is important. Maintaining a healthy weight and having yearly check-ups can help prevent more serious conditions over time.`,

  'husky': `Huskies are energetic, intelligent, and known for their striking appearance and endurance. Bred as sled dogs in Arctic conditions, they are strong-willed and require plenty of physical activity. Huskies are also pack-oriented, thriving in homes where they have company—human or canine—and tasks to do. They are friendly and good-natured, though their independence may make them less obedient than some other breeds.

  The average lifespan of a Husky is 12 to 14 years. They enjoy long walks, runs, and activities like hiking or pulling sleds or carts. Huskies do not do well when confined for long periods and need a lot of exercise to stay physically and mentally balanced.

  Common health issues in Huskies include hip dysplasia, eye disorders like cataracts and progressive retinal atrophy, and skin conditions such as zinc-responsive dermatosis. Their thick double coats also require regular grooming, especially during shedding seasons. Preventive care and a well-managed diet can help them lead long, active lives.`,

  'pomeranian': `Pomeranians are spunky, intelligent, and full of personality packed into a tiny frame. Known for their bold and confident demeanor, these toy breeds make great companions for individuals and families alike. They are alert and vocal, often acting as little watchdogs despite their small size.

  Pomeranians typically live 12 to 16 years, with many staying lively and playful into their senior years. Though small, they still benefit from regular walks and indoor play to keep them fit and entertained. They thrive on attention and enjoy learning tricks and engaging with their owners.

  Health concerns for Pomeranians include dental issues, tracheal collapse, patellar luxation, and heart problems. Their thick coats also require frequent grooming to prevent mats and tangles. Due to their small size, care must be taken to avoid injuries from falls or rough handling. Regular vet visits and proper grooming help ensure a long, healthy life.`,

  'poodle': `Poodles are intelligent, elegant, and highly trainable dogs known for their sharp minds and hypoallergenic coats. Available in standard, miniature, and toy sizes, they adapt well to various lifestyles and living spaces. Poodles enjoy mental challenges, games, and learning new tricks. Their alertness and desire to please make them excellent family dogs, performers, and service animals.

  The average lifespan of a Poodle is 12 to 15 years, with smaller varieties often living longer than the standard size. They thrive with daily exercise and mental stimulation, whether through walks, games, or obedience work. Poodles are social animals and enjoy spending time with their families, both indoors and out.

  Though generally healthy, Poodles are predisposed to certain conditions. These may include hip dysplasia, progressive retinal atrophy, Addison’s disease, and thyroid disorders. They may also be prone to ear infections due to their floppy ears. Routine grooming and regular vet care are important to manage their coat and monitor for early signs of health issues.`,

  'golden-retriever': `Golden Retrievers are known for their friendly, gentle, and eager-to-please temperament. Bred originally as hunting companions, they are reliable, obedient, and patient—traits that make them excellent therapy and service dogs. Goldens are social and affectionate, doing best in households where they receive plenty of attention and interaction.

  They typically live between 10 to 12 years and require regular exercise to stay in good health. Golden Retrievers enjoy outdoor activities like running, swimming, and fetching, and they are particularly well-suited to families with children or other pets.

  Health-wise, Golden Retrievers can be prone to hip and elbow dysplasia, certain heart conditions, and cancers such as hemangiosarcoma and lymphoma. They may also suffer from ear infections and skin issues. Regular check-ups, exercise, and maintaining a healthy weight can help reduce the likelihood of serious issues over time.`,

  'chihuahua': `Chihuahuas are bold, spirited, and full of attitude despite their tiny size. They are fiercely loyal to their favorite person and often act much larger than they are. While they can be wary of strangers, Chihuahuas are affectionate and playful with those they trust. They adapt well to apartment living but still need daily stimulation.

  With an average lifespan of 14 to 17 years, Chihuahuas are among the longest-living dog breeds. They require only moderate exercise, such as short walks or indoor play, but benefit greatly from mental enrichment. Their small size makes them easy to care for, though they are sensitive to cold and may need extra warmth.

  Common health concerns for Chihuahuas include dental diseases, patellar luxation, heart problems (like mitral valve disease), and tracheal collapse. Because of their petite build, it’s important to handle them gently and avoid injuries from falls. Regular dental care and routine vet visits are essential to keeping them healthy.`,

  'doberman': `Dobermans are intelligent, alert, and fiercely loyal dogs with a natural instinct to protect. Bred for guarding, they are confident and fearless, yet they are also known to be affectionate and deeply bonded with their families. With proper training and socialization, Dobermans make loving and obedient companions.

  They typically live between 10 to 13 years. Dobermans are highly active and thrive with consistent exercise and mental challenges. They require firm but positive training from an early age to channel their energy and build trust. Their sleek coats make grooming simple, but their high energy levels demand daily attention.

  Dobermans are prone to several genetic health conditions including dilated cardiomyopathy, von Willebrand’s disease (a bleeding disorder), and hip dysplasia. They may also experience bloat, which can be life-threatening. Regular vet screenings, a proper diet, and awareness of breed-specific risks are critical for maintaining their health.`,

  'pitbull': `Pitbulls are strong, energetic, and affectionate dogs that are often misunderstood due to stereotypes. When properly raised and socialized, they are loving companions with a strong desire to please. They are loyal to their families, great with children, and enjoy human interaction and physical activity.

  The average lifespan of a Pitbull is 12 to 14 years. These dogs need plenty of exercise to stay happy and healthy. They excel in agility, tug-of-war games, and interactive toys. Mental stimulation is especially important, as they are intelligent and can become bored easily if left alone too long.

  Pitbulls can be prone to certain health conditions like hip dysplasia, skin allergies, and heart disease. They may also suffer from knee problems such as patellar luxation. A high-quality diet, regular vet care, and proper training and socialization from a young age are essential to ensuring a well-adjusted and healthy Pitbull.`


};

export default function BreedDesc() {
  const { breed } = useParams();

  useEffect(() => {
    const visited = JSON.parse(sessionStorage.getItem('visitedBreeds')) || [];
    if (!visited.includes(breed)) {
      visited.push(breed);
      sessionStorage.setItem('visitedBreeds', JSON.stringify(visited));
    }
  }, [breed]);

  return (
    <div className="container my-5">
      <h2 className="text-capitalize">{breed.replaceAll('-', ' ')}</h2>
      {descriptions[breed]
        ? descriptions[breed].split('\n\n').map((para, i) => <p key={i}>{para}</p>)
        : <p>No description available for this breed.</p>
      }
    </div>
  );
}
