import sharp from 'sharp';
import { mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const assetsDir = path.join(
  process.env.ASSETS_DIR ||
    '/Users/lukemeyer/.cursor/projects/Users-lukemeyer-personal-website/assets'
);
const outDir = path.join(root, 'public/images');

const sources = {
  me: 'me-199d7f82-7660-426b-9338-85f8e921b6d6.png',
  banner: 'banner-225f78a2-f52a-4ac7-ab46-2f3be5553401.png',
  burn_ops: 'burn_ops-bd2721b5-f53c-4d2a-84a3-05bb4eff5de1.png',
  co_river: 'co_river-32207787-17e5-475d-ba47-f91e981cd067.png',
  fire_helo: 'fire_helo-4244ec78-cb93-4244-9ade-591191d67fa4.png',
  fire_hill: 'fire_hill-68cdb734-b0d3-44da-8773-2007deb13fe3.png',
  fire_me: 'fire_me-7b91885a-e245-4fd2-847d-997e9b6c31e5.png',
  landscape: 'landscape-95a0a3ae-234b-4c22-bb64-826c3e444eee.png',
  sunset: 'sunset-02fe9e9a-d94e-4379-9cb7-fe502ba939c8.png',
  view: 'view-95cdb8a6-8294-4fb1-aac9-fa6480b77934.png',
  wash: 'wash-b5dbaee4-53ec-4c66-b9de-eb18ec7bfc6c.png',
};

async function writeWebp(inputPath, outputPath, width, height) {
  await sharp(inputPath)
    .rotate()
    .resize(width, height, { fit: 'cover', position: 'centre' })
    .webp({ quality: 85 })
    .toFile(outputPath);
}

async function writeJpeg(inputPath, outputPath, width, height) {
  await sharp(inputPath)
    .rotate()
    .resize(width, height, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(outputPath);
}

async function main() {
  await mkdir(outDir, { recursive: true });

  const src = (key) => path.join(assetsDir, sources[key]);

  await writeWebp(src('me'), path.join(outDir, 'me.webp'), 400, 400);
  await writeWebp(src('me'), path.join(outDir, 'mobile_me.webp'), 400, 400);
  await writeJpeg(src('me'), path.join(outDir, 'me.jpg'), 400, 600);

  await writeWebp(src('banner'), path.join(outDir, 'banner.webp'), 2400, 1699);
  await writeWebp(src('banner'), path.join(outDir, 'mobile_banner.webp'), 640, 453);
  await writeJpeg(src('banner'), path.join(outDir, 'banner.jpg'), 2400, 1699);

  const masonry43 = [
    ['fire_me', 'fire_me'],
    ['burn_ops', 'Burn_Ops'],
    ['co_river', 'Co_River'],
    ['fire_helo', 'fire_helo'],
    ['fire_hill', 'fire_hill'],
  ];

  for (const [key, name] of masonry43) {
    await writeWebp(src(key), path.join(outDir, `${name}.webp`), 1200, 900);
    await writeJpeg(src(key), path.join(outDir, `${name}.jpeg`), 1200, 900);
    const mobileH = key === 'burn_ops' ? 533 : 300;
    await writeWebp(
      src(key),
      path.join(outDir, `mobile_${key}.webp`),
      400,
      mobileH
    );
  }

  await writeWebp(src('landscape'), path.join(outDir, 'Landscape.webp'), 1200, 678);
  await writeWebp(
    src('landscape'),
    path.join(outDir, 'mobile_landscape.webp'),
    400,
    226
  );
  await writeJpeg(src('landscape'), path.join(outDir, 'Landscape.jpeg'), 1200, 678);

  for (const [key, name] of [
    ['sunset', 'Sunset'],
    ['view', 'View'],
    ['wash', 'wash'],
  ]) {
    const fileName = key === 'wash' ? 'wash' : name;
    await writeWebp(src(key), path.join(outDir, `${fileName}.webp`), 1200, 675);
    await writeWebp(
      src(key),
      path.join(outDir, `mobile_${key}.webp`),
      400,
      225
    );
    if (key !== 'wash') {
      await writeJpeg(src(key), path.join(outDir, `${fileName}.jpeg`), 1200, 675);
    } else {
      await writeJpeg(src(key), path.join(outDir, 'wash.jpeg'), 1200, 675);
    }
  }

  console.log('Images written to', outDir);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
