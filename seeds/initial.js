exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("student")
      .del()
      .then(() => {
        return knex.raw("ALTER SEQUENCE student_id_seq RESTART WITH 1;");})
      .then(function() {
          // Inserts seed entries
          return knex("student").insert([
              {
                  first_name: "R.J.",
                  last_name: "Kirkhope",
                  image: "Robert_Kirkhope.jpeg",
                  phone: "303-717-3002",
                  email: "rjkirkhope@gmail.com",
                  linked_in: "https://www.linkedin.com/in/robert-kirkhope/",
                  facebook: "https://github.com/RJKirkhope",
                  photo:
                      "https://cf.ltkcdn.net/small-pets/images/orig/200801-2121x1414-goldfish2.jpg",
                  hometown_lat: "32.715738",
                  hometown_long: "-117.161084",
                  prev_occupation: "Stuntman"
              },
              {
                  first_name: "Josh",
                  last_name: "Bardsley",
                  image: "Josh_Bardsley.jpeg",
                  phone: "303-993-9631",
                  email: "joshbardsley4@gmail.com",
                  linked_in: "https://www.linkedin.com/in/josh-bardsley/",
                  facebook: "https://github.com/joshbardsley1202",
                  photo:
                      "http://www.yourpurebredpuppy.com/dogbreeds/photos-RS/sheltiesf2.jpg",
                  hometown_lat: "39.548079",
                  hometown_long: "-104.973933",
                  prev_occupation: "Valet"
              },
              {
                  first_name: "Mark",
                  last_name: "Newcomb",
                  image: "Mark_Newcomb.jpeg",
                  phone: "316-841-5325",
                  email: "mark.newcomb@marknewcomb1.com",
                  linked_in: "https://www.linkedin.com/in/marknewcomb1/",
                  facebook: "https://github.com/MarkNewcomb1",
                  photo:
                      "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12194915/French-Bulldog-on-White-14.jpg",
                  hometown_lat: "38.879178",
                  hometown_long: "-99.326770",
                  prev_occupation: "Developer"
              },
              {
                  first_name: "Matthew",
                  last_name: "Riach",
                  image: "Matthew_Riach.jpeg",
                  phone: "720-333-4794",
                  email: "matthew.riach@gmail.com",
                  linked_in: "https://www.linkedin.com/in/matthewriach/",
                  facebook: "https://github.com/thextool",
                  photo:
                      "http://cdn.smosh.com/wp-content/uploads/bloguploads/cwolf-19.jpg",
                  hometown_lat: "53.408371",
                  hometown_long: "-2.991573",
                  prev_occupation: "Road map salesman"
              },
              {
                  first_name: "Levi",
                  last_name: "Boenish",
                  image: "Levi_Boenish.jpeg",
                  phone: "303-968-9636",
                  email: "leviboenish@gmail.com",
                  linked_in: "https://www.linkedin.com/in/levicodes/",
                  facebook: "https://github.com/leviboenish",
                  photo:
                      "http://cdn.smosh.com/wp-content/uploads/bloguploads/cwolf-4.jpg",
                  hometown_lat: "40.014986",
                  hometown_long: "-105.270546",
                  prev_occupation: "Manager"
              },
              {
                  first_name: "Tom",
                  last_name: "Clukies",
                  image: "Tom_Clukies.jpeg",
                  phone: "",
                  email: "thomas.clukies@gmail.com",
                  linked_in: "https://www.linkedin.com/in/thomas-clukies/",
                  facebook: "https://github.com/tclukies",
                  photo: "https://i.ytimg.com/vi/dwO06H-IF80/hqdefault.jpg",
                  hometown_lat: "39.548079",
                  hometown_long: "-104.973933",
                  prev_occupation: "Outdoorsman"
              },
              {
                  first_name: "William",
                  last_name: "Kirkhope",
                  image: "William_Kirkhope.jpeg",
                  phone: "",
                  email: "kirkhopew@yahoo.com",
                  linked_in: "https://www.linkedin.com/in/william-kirkhope/",
                  facebook: "https://github.com/WillKirkhope",
                  photo:
                      "https://i.pinimg.com/736x/21/25/c0/2125c0d98eb7b290e5903355ac0f8e6b--christmas-trees-christmas-cats.jpg",
                  hometown_lat: "32.715738",
                  hometown_long: "-117.161084",
                  prev_occupation: "Personal Trainer"
              },
              {
                  first_name: "Josh",
                  last_name: "Levy",
                  image: "Josh_Levy.jpeg",
                  phone: "",
                  email: "joshaaronlevy@gmail.com",
                  linked_in: "https://www.linkedin.com/in/joshaaronlevy/",
                  facebook: "https://github.com/joshaaronlevy",
                  photo:
                      "https://westiegifts.com/11472-large_default/bandana-westie-greetings-card.jpg",
                  hometown_lat: "-26.204103",
                  hometown_long: "28.047305",
                  prev_occupation: "Lesser Developer"
              },
              {
                  first_name: "Ben",
                  last_name: "Austin",
                  image: "Ben_Austin.jpeg",
                  phone: "303-646-7942",
                  email: "bnjmn80@gmail.com",
                  linked_in: "https://www.linkedin.com/in/benaustin80/",
                  facebook: "https://github.com/simplesNotEZ",
                  photo:
                      "http://www.sheepadoodles.org/uploads/8/2/1/7/82172392/3675770.jpg?603",
                  hometown_lat: "39.739236",
                  hometown_long: "-104.990251",
                  prev_occupation: "Social Work"
              },
              {
                  first_name: "Natalie",
                  last_name: "Todd",
                  image: "Natalie_Todd.jpeg",
                  phone: "",
                  email: "natalie.todd15@gmail.com",
                  linked_in: "https://www.linkedin.com/in/natalie-todd/",
                  facebook: "https://github.com/natalie-todd",
                  photo:
                      "https://laughingsquid.com/wp-content/uploads/2016/01/cat-banana.png",
                  hometown_lat: "61.218056",
                  hometown_long: "-149.900278",
                  prev_occupation: "Technical Recruiter"
              },
              {
                  first_name: "Eldon",
                  last_name: "Dahlin",
                  image: "Eldon_Dahlin.jpeg",
                  phone: "",
                  email: "end1989@gmail.com",
                  linked_in: "https://www.linkedin.com/in/eldon-dahlin/",
                  facebook: "",
                  photo:
                      "http://www.dogwallpapers.net/wallpapers/cute-rottweiler-dog-photo.jpg",
                  hometown_lat: "37.404094",
                  hometown_long: "-120.850474",
                  prev_occupation: "Customer Service Rep"
              },
              {
                  first_name: "Tiffany",
                  last_name: "Ricks",
                  image: "Tiffany_Ricks.jpeg",
                  phone: "303-601-8677",
                  email: "tricks7@me.com",
                  linked_in: "https://www.linkedin.com/in/tiffany-ricks/",
                  facebook: "https://github.com/tricks7",
                  photo:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLj4X16RkoIqAFunD36VIldA-y8qr3GH13oe7i_Ao88zE6R_u3Aw",
                  hometown_lat: "33.4942",
                  hometown_long: "111.9261",
                  prev_occupation: "CNA"
              },
              {
                  first_name: "George",
                  last_name: "Chios",
                  image: "George_Chios.jpeg",
                  phone: "",
                  email: "georgechios.music@gmail.com",
                  linked_in: "https://www.linkedin.com/in/georgechios/",
                  facebook: "https://github.com/rusticpenguin/",
                  photo:
                      "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12224425/Shiba-Inu-Care.jpg",
                  hometown_lat: "39.522455",
                  hometown_long: "-76.444740",
                  prev_occupation: "Audio Engineer"
              },
              {
                  first_name: "Danny",
                  last_name: "Pifer",
                  image: "Danny_Pifer.jpeg",
                  phone: "303-847-9394 ",
                  email: "piferdg@gmail.com",
                  linked_in: "https://www.linkedin.com/in/daniel-pifer/",
                  facebook: "https://github.com/piferdg",
                 photo:
                      "https://i.kym-cdn.com/photos/images/original/000/823/256/8f5.jpg",
                  hometown_lat: "37.7749",
                  hometown_long: "122.4194",
                  prev_occupation: "QA Tester"
              },
              {
                  first_name: "Kimberly",
                  last_name: "Hermosillo",
                  image: "Kimberly_Hermosillo.jpeg",
                  phone: "720-675-2974",
                  email: "kimhermosillo@yahoo.com",
                  linked_in: "https://www.linkedin.com/in/kimhermosillo/",
                  facebook: "https://github.com/kimhermosillo",
                 photo:
                      "http://cdn.smosh.com/wp-content/uploads/bloguploads/cwolf-22.jpg",
                  hometown_lat: "39.739236",
                  hometown_long: "-104.990251",
                  prev_occupation: "Student"
              },
              {
                  first_name: "Austin",
                  last_name: "Loveless",
                  image: "Austin_Loveless.jpeg",
                  phone: "228-224-2508",
                  email: "austinloveless5171@gmail.com",
                  linked_in: "https://www.linkedin.com/in/austin-loveless/",
                  facebook: "",
                  photo:
                      "https://www.rd.com/wp-content/uploads/2017/10/These-Funny-Dog-Videos-Are-the-Break-You-Need-Right-Now_493370860-Jenn_C-760x506.jpg",
                  hometown_lat: "30.367420",
                  hometown_long: "-89.092816",
                  prev_occupation: "Navy"
              },
              {
                  first_name: "Jeff",
                  last_name: "Strunk",
                  image: "Jeff_Strunk.jpeg",
                  phone: "",
                  email: "jeff5489@gmail.com",
                  linked_in: "https://www.linkedin.com/in/jeff-strunk/",
                  facebook: "https://github.com/jeff5489",
                  photo:
                      "https://i.pinimg.com/originals/fc/ea/9a/fcea9a5369ebbdca95dca1c0aa1e1a51.jpg",
                  hometown_lat: "39.122562",
                  hometown_long: "-84.135768",
                  prev_occupation: "Financial Consultant"
              },
              {
                  first_name: "Ciaran",
                  last_name: "Guha-Gilford",
                  image: "Ciaran_Guha-Gilford.jpeg",
                  phone: "",
                  email: "cguhagil@terpmail.umd.edu",
                  linked_in: "https://www.linkedin.com/in/ciarangg/",
                  facebook: "https://github.com/ciarangg",
                  photo:
                      "http://cdn.smosh.com/wp-content/uploads/bloguploads/cwolf-5.jpg",
                  hometown_lat: "38.9876",
                  hometown_long: "76.8205",
                  prev_occupation: "Lab Rat"
              },
              {
                  first_name: "Michael",
                  last_name: "Coons",
                  image: "Michael_Coons.jpeg",
                  phone: "812-360-4882",
                  email: "mcoons67@gmail.com",
                  linked_in: "https://www.linkedin.com/in/michael-coons/",
                  facebook: "https://github.com/mcoons",
                  photo: "https://i.huffpost.com/gen/3754046/original.jpg",
                  hometown_lat: "41.079273",
                  hometown_long: "85.139351",
                  prev_occupation: "Director of Information Technology"
              },
              {
                  first_name: "Josh",
                  last_name: "Robbs",
                  image: "Josh_Robbs.jpeg",
                  phone: "703-615-1253",
                  email: "josh.robbs@gmail.com",
                  linked_in: "https://www.linkedin.com/in/joshrobbs/",
                  facebook: "https://github.com/josh-robbs",
                  photo:
                      "https://images.pexels.com/photos/137049/pexels-photo-137049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
                  hometown_lat: "37.122366",
                  hometown_long: "-76.345777",
                  prev_occupation: "Editorial Assistant"
              },
              {
                  first_name: "Belinda",
                  last_name: "Galiano",
                  image: "Belinda_Galiano.jpeg",
                  phone: "970-234-0103",
                  email: "belindagalianomolina@gmail.com",
                  linked_in: "https://www.linkedin.com/in/belinda-galiano/",
                  facebook: "https://github.com/belinda-galiano",
                  photo:
                      "http://cdn.smosh.com/wp-content/uploads/bloguploads/cwolf-14.jpg",
                  hometown_lat: "8.569824",
                  hometown_long: "-71.180499",
                  prev_occupation: "Classical Pianist"
              },
              {
                  first_name: "Thomas",
                  last_name: "Lee",
                  image: "Thomas_Lee.jpeg",
                  phone: "",
                  email: "tdroid99@gmail.com",
                  linked_in: "https://www.linkedin.com/in/thomas-a-lee/",
                  facebook: "https://github.com/Tomwolverine",
                  photo:
                      "https://i.ytimg.com/vi/OqQPv78AMw0/maxresdefault.jpg",
                  hometown_lat: "38.878487",
                  hometown_long: "-104.869766",
                  prev_occupation: "Manager of Strange People"
              },
              {
                  first_name: "Ryan",
                  last_name: "McCrory",
                  image: "Ryan_McCrory.jpeg",
                  phone: "",
                  email: "ryanmccrory83@gmail.com",
                  linked_in: "https://www.linkedin.com/in/ryan-mccrory83/",
                  facebook: "https://github.com/ryanmccrory83",
                  photo:
                      "http://cdn.smosh.com/wp-content/uploads/bloguploads/cwolf-1.jpg",
                  hometown_lat: "39.739236",
                  hometown_long: "-104.990251",
                  prev_occupation: "US Army"
              },
              {
                  first_name: "Matthew",
                  last_name: "Huston",
                  image: "Matthew_Huston.jpeg",
                  phone: "303-898-1848",
                  email: "matthuston1@aol.com",
                  linked_in: "https://www.linkedin.com/in/matthew-huston1/",
                  facebook: "https://github.com/MattHuston1",
                  photo:
                      "https://buzzsharer.com/wp-content/uploads/2015/11/cute-bengal-cat-lying1.jpg",
                  hometown_lat: "39.613319",
                  hometown_long: "-105.016647",
                  prev_occupation: "Valet"
              }
          ]);
      });
};
